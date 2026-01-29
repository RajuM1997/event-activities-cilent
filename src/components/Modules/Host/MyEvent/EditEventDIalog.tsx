import InputFieldsError from "@/components/Shared/InputFieldsError";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createEvent, updateEvent } from "@/services/event/event.service";
import { IEvent } from "@/types/event.interface";
import { Edit } from "lucide-react";
import Image from "next/image";
import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

interface IEditEventDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  event: IEvent;
}

const UpdateEventFormDialog = ({
  open,
  onClose,
  onSuccess,
  event,
}: IEditEventDialogProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isEdit = !!event;

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [state, formAction, isPending] = useActionState(
    isEdit ? updateEvent.bind(null, event.id!) : createEvent,
    null,
  );
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFile(file || null);
  };

  const prevStateRef = useRef(state);

  const handleClose = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    if (selectedFile) {
      setSelectedFile(null); // Clear preview
    }
    formRef.current?.reset(); // Clear form
    onClose(); // Close dialog
  };

  useEffect(() => {
    if (state === prevStateRef.current) return;
    prevStateRef.current = state;

    if (state?.success) {
      toast.success(state.message);
      if (formRef.current) {
        formRef.current.reset();
      }
      onSuccess();
      onClose();
    } else if (state && !state.success && state.message) {
      toast.error(state.message);

      if (selectedFile && fileInputRef.current) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(selectedFile);
        fileInputRef.current.files = dataTransfer.files;
      }
    }
  }, [state, onSuccess, onClose, selectedFile]);

  const previewSrc: string | undefined = selectedFile
    ? URL.createObjectURL(selectedFile)
    : event?.image;

  useEffect(() => {
    return () => {
      if (selectedFile) {
        URL.revokeObjectURL(previewSrc!);
      }
    };
  }, [selectedFile, previewSrc]);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>{isEdit ? "Edit Doctor" : "Add New Doctor"}</DialogTitle>
        </DialogHeader>

        <form
          ref={formRef}
          action={formAction}
          className="flex flex-col flex-1 min-h-0"
        >
          <div className="flex-1 overflow-y-auto px-6 space-y-4 pb-4">
            {/* file */}
            <Field className="mx-auto">
              <div className="relative w-28 h-28">
                {/* Avatar */}
                <div className="relative w-28 h-28 rounded-full overflow-hidden border bg-gray-100 mx-auto">
                  {previewSrc ? (
                    <Image
                      src={previewSrc}
                      alt="Profile Photo"
                      fill
                      className="object-cover mx-auto"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-gray-500 text-sm">
                      No Photo
                    </div>
                  )}
                  <div className="absolute top-0 left-0 bg-black/40 w-full h-full z-10"></div>
                  <label className="" htmlFor="file">
                    <Edit
                      size={20}
                      className="absolute text-white z-15 right-4 top-5"
                    />
                  </label>
                </div>
              </div>

              {/* Hidden file input */}
              <Input
                ref={fileInputRef}
                id="file"
                name="file"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />

              <InputFieldsError field="profilePhoto" state={state} />
            </Field>

            {/* event name */}
            <Field>
              <FieldLabel htmlFor="eventName">Event Name</FieldLabel>
              <Input
                id="eventName"
                name="eventName"
                type="text"
                placeholder="Write your event name here"
                defaultValue={event?.eventName}
              />

              <InputFieldsError field="eventName" state={state} />
            </Field>

            {/* date */}
            <Field>
              <FieldLabel htmlFor="date">Date</FieldLabel>
              <Input
                id="date"
                name="date"
                type="datetime-local"
                defaultValue={event?.date || ""}
              />
              <InputFieldsError field="date" state={state} />
            </Field>

            {/* location */}
            <Field>
              <FieldLabel htmlFor="location">Location</FieldLabel>
              <Input
                id="location"
                name="location"
                type="location"
                placeholder="Dhaka, Bangladesh"
                defaultValue={event?.location}
              />
              <InputFieldsError field="location" state={state} />
            </Field>

            {/* Max Participants */}
            <Field>
              <FieldLabel htmlFor="maxParticipants">
                Max Participants
              </FieldLabel>
              <Input
                id="maxParticipants"
                name="maxParticipants"
                type="text"
                placeholder="100"
                defaultValue={event?.maxParticipants}
              />

              <InputFieldsError field="maxParticipants" state={state} />
            </Field>

            {/* Min Participants */}
            <Field>
              <FieldLabel htmlFor="minParticipants">
                Min Participants
              </FieldLabel>
              <Input
                id="minParticipants"
                name="minParticipants"
                type="text"
                placeholder="1"
                defaultValue={event?.minParticipants}
              />
              <InputFieldsError field="minParticipants" state={state} />
            </Field>

            {/* Joining Fee */}
            <Field>
              <FieldLabel htmlFor="joiningFee">Joining Fee</FieldLabel>
              <Input
                id="joiningFee"
                name="joiningFee"
                type="text"
                placeholder="500"
                defaultValue={event?.joiningFee}
              />
              <InputFieldsError field="joiningFee" state={state} />
            </Field>

            {/* category */}
            <Field>
              <FieldLabel htmlFor="category">Category</FieldLabel>
              <Select name="category" defaultValue={event?.category || ""}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="Concert">Concert</SelectItem>
                    <SelectItem value="Live_Music">Live Music</SelectItem>
                    <SelectItem value="Movie_Night">Movie Night</SelectItem>
                    <SelectItem value="Stand_up_Comedy">
                      Stand up Comedy
                    </SelectItem>
                    <SelectItem value="Theater">Theater</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <InputFieldsError field="category" state={state} />
            </Field>

            {/* description */}
            <Field>
              <FieldLabel htmlFor="description">Description</FieldLabel>
              <Textarea
                id="description"
                name="description"
                placeholder="Type your description here."
                defaultValue={event?.description || ""}
              />
              <InputFieldsError field="description" state={state} />
            </Field>
          </div>

          <div className="flex justify-end gap-2 px-6 py-4 border-t bg-gray-50">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending
                ? "Saving..."
                : isEdit
                  ? "Update Doctor"
                  : "Create Doctor"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateEventFormDialog;
