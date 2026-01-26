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
import {
  updateHostProfile,
  updateUserProfile,
} from "@/services/auth/updateUser";
import { IUser } from "@/types/user.interface";
import { Edit } from "lucide-react";
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
    user.role === "USER" ? updateUserProfile : updateHostProfile,
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

  // Preview source (string only)
  const previewSrc: string | undefined = selectedFile
    ? URL.createObjectURL(selectedFile)
    : user.role === "HOST"
      ? user.host?.profilePhoto
      : user.profilePhoto;

  // Cleanup object URL (important)
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
          <DialogTitle>
            {isEdit ? "Edit Profile" : "Add New Doctor"}
          </DialogTitle>
        </DialogHeader>

        <form
          ref={formRef}
          action={formAction}
          className="flex flex-col flex-1 min-h-0"
        >
          {user.role === "HOST" ? (
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
                    <label htmlFor="file">
                      <Edit className="text-primary absolute z-5 left-4 top-5" />
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
              {/* user name */}
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Write your user name here"
                  defaultValue={user?.host?.name}
                />

                <InputFieldsError field="name" state={state} />
              </Field>

              {/* address */}
              <Field>
                <FieldLabel htmlFor="address">Address</FieldLabel>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Type your address here"
                  defaultValue={user?.host?.address || ""}
                />

                <InputFieldsError field="address" state={state} />
              </Field>

              {/* phone */}
              <Field>
                <FieldLabel htmlFor="phoneNumber">Phone Number</FieldLabel>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  placeholder="Type your phoneNumber here"
                  defaultValue={user?.host?.phoneNumber || ""}
                />

                <InputFieldsError field="phoneNumber" state={state} />
              </Field>

              {/* bio */}
              <Field>
                <FieldLabel htmlFor="bio">Bio</FieldLabel>
                <Textarea
                  defaultValue={user?.host?.bio || ""}
                  id="bio"
                  name="bio"
                  placeholder="Type your Bio here."
                />
                <InputFieldsError field="bio" state={state} />
              </Field>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto px-6 space-y-4 pb-4">
              {/* user name */}
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Write your user name here"
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

                <InputFieldsError field="city" state={state} />
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

                <InputFieldsError field="area" state={state} />
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

                <InputFieldsError field="country" state={state} />
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
                <FieldLabel>Profile Photo</FieldLabel>

                <div className="relative w-28 h-28">
                  {/* Avatar */}
                  <div className="relative w-28 h-28 rounded-full overflow-hidden border bg-gray-100">
                    {previewSrc ? (
                      <Image
                        src={previewSrc}
                        alt="Profile Photo"
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-gray-500 text-sm">
                        No Photo
                      </div>
                    )}
                  </div>

                  {/* Edit overlay */}
                  <label
                    htmlFor="file"
                    className="absolute inset-0 flex items-center justify-center
          rounded-full bg-black/40 text-white text-sm font-medium
          opacity-0 hover:opacity-100 cursor-pointer transition"
                  >
                    Edit
                  </label>
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
            </div>
          )}

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
              {isPending ? "Saving..." : isEdit ? "Update User" : "Create User"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateUserFormDialog;
