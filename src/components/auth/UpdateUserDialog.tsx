"use client";

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
import { updateUserProfile } from "@/services/auth/updateUser";
import { createEvent } from "@/services/event/event.service";
import { IUser } from "@/types/user.interface";
import Image from "next/image";
import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

interface IEditUserDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  user: IUser;
}

const UpdateUserFormDialog = ({
  open,
  onClose,
  onSuccess,
  user,
}: IEditUserDialogProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isEdit = !!user;

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [state, formAction, isPending] = useActionState(
    isEdit ? updateUserProfile.bind(null, user.id!) : createEvent,
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
  console.log({ isEdit });

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>
            {isEdit ? "Edit Profile" : "Add New Doctor"}
          </DialogTitle>
        </DialogHeader>

        <form
          ref={formRef}
          action={formAction}
          className="flex flex-col flex-1 min-h-0"
        >
          <div className="flex-1 overflow-y-auto px-6 space-y-4 pb-4">
            {/* event name */}
            <Field>
              <FieldLabel htmlFor="eventName">Name</FieldLabel>
              <Input
                id="eventName"
                name="eventName"
                type="text"
                placeholder="Write your event name here"
                defaultValue={user?.name}
              />

              <InputFieldsError field="name" state={state} />
            </Field>

            {/* city */}
            <Field>
              <FieldLabel htmlFor="city">City</FieldLabel>
              <Input
                id="city"
                name="city"
                type="text"
                placeholder="Type your city here"
                defaultValue={user?.location?.city || ""}
              />

              <InputFieldsError field="name" state={state} />
            </Field>
            {/* area */}
            <Field>
              <FieldLabel htmlFor="area">Area</FieldLabel>
              <Input
                id="area"
                name="area"
                type="text"
                placeholder="Type your area here"
                defaultValue={user?.location?.area || ""}
              />

              <InputFieldsError field="name" state={state} />
            </Field>

            {/* country */}
            <Field>
              <FieldLabel htmlFor="country">Country</FieldLabel>
              <Input
                id="country"
                name="country"
                type="text"
                placeholder="Type your country here"
                defaultValue={user?.location?.country || ""}
              />

              <InputFieldsError field="name" state={state} />
            </Field>

            {/* interests */}
            <Field>
              <FieldLabel htmlFor="interests">Interests</FieldLabel>
              <Select name="interests" defaultValue={user?.interests}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a Interests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Interests</SelectLabel>
                    <SelectItem value="Sports">Sports</SelectItem>
                    <SelectItem value="Gaming">Gaming</SelectItem>
                    <SelectItem value="Art">Art</SelectItem>
                    <SelectItem value="Travel">Travel</SelectItem>
                    <SelectItem value="Fitness">Fitness</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <InputFieldsError field="interests" state={state} />
            </Field>

            {/* bio */}
            <Field>
              <FieldLabel htmlFor="bio">Bio</FieldLabel>
              <Textarea
                defaultValue={user?.bio || ""}
                id="bio"
                name="bio"
                placeholder="Type your Bio here."
              />
              <InputFieldsError field="bio" state={state} />
            </Field>

            {/* file */}
            <Field>
              <FieldLabel htmlFor="file">Cover Photo</FieldLabel>
              {selectedFile && (
                <Image
                  //get from state if available
                  src={
                    typeof selectedFile === "string"
                      ? selectedFile
                      : URL.createObjectURL(selectedFile)
                  }
                  alt="Profile Photo Preview"
                  width={50}
                  height={50}
                  className="mb-2 rounded-full"
                />
              )}

              <Input
                ref={fileInputRef}
                id="file"
                name="file"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              <p className="text-xs text-gray-500 mt-1">
                Upload a profile photo for the doctor
              </p>
              <InputFieldsError state={state} field="profilePhoto" />
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

export default UpdateUserFormDialog;
