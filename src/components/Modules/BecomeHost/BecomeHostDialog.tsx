/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import InputFieldsError from "@/components/Shared/InputFieldsError";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { registerHost } from "@/services/auth/registerHost";
import { useRouter } from "next/navigation";
import {
  useActionState,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import { toast } from "sonner";

const BecomeHostDialog = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);
  const [state, formAction, isPending] = useActionState(registerHost, null);
  const prevStateRef = useRef(state);
  const router = useRouter();
  const [, startTransition] = useTransition();
  //force remount to reset state of form
  const [_dialogKey, setDialogKey] = useState(0);

  const handleClose = () => {
    setDialogKey((prev) => prev + 1);
    formRef.current?.reset();
    setOpen(!open);
  };

  useEffect(() => {
    if (state === prevStateRef.current) return;
    prevStateRef.current = state;
    if (state?.success) {
      toast.success(state.message || "Schedule created successfully");
      if (formRef.current) {
        formRef.current.reset();
      }
      startTransition(() => {
        router.refresh();
      });
      setOpen(false);
    } else if (state?.message && !state.success) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <>
      <Dialog key={_dialogKey} open={open} onOpenChange={handleClose}>
        <DialogTrigger asChild>
          <Button size="lg">Host Request</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-center">
              JoinUp Host Application
            </DialogTitle>
            <p className="mt-2 text-sm text-center text-muted-foreground">
              Apply to become an official host on JoinUp and reach a wider
              audience with secure bookings and simple event management tools.
            </p>
          </DialogHeader>
          {/* form start here */}
          <form action={formAction} className="pt-5" ref={formRef}>
            <FieldGroup>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* name */}
                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Evil Rabbit"
                    defaultValue={state?.formData?.name || ""}
                  />

                  <InputFieldsError field="name" state={state} />
                </Field>

                {/* email */}
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@gmail.com"
                    defaultValue={state?.formData?.email || ""}
                  />
                  <InputFieldsError field="email" state={state} />
                </Field>

                {/* password */}
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="*******"
                    defaultValue={state?.formData?.password || ""}
                  />
                  <InputFieldsError field="password" state={state} />
                </Field>

                {/* confirm password */}
                <Field>
                  <FieldLabel htmlFor="confirmPassword">
                    Confirm Password
                  </FieldLabel>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="*******"
                    defaultValue={state?.formData?.confirmPassword || ""}
                  />
                  <InputFieldsError field="confirmPassword" state={state} />
                </Field>

                {/* address */}
                <Field>
                  <FieldLabel htmlFor="address">Address</FieldLabel>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Type your address here"
                    defaultValue={state?.formData?.address || ""}
                  />

                  <InputFieldsError field="address" state={state} />
                </Field>

                {/* phone number */}
                <Field>
                  <FieldLabel htmlFor="phoneNumber">Phone Number</FieldLabel>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    placeholder="Type your phone number here"
                    defaultValue={state?.formData?.phoneNumber || ""}
                  />

                  <InputFieldsError field="phoneNumber" state={state} />
                </Field>

                {/* bio */}
                <Field>
                  <FieldLabel htmlFor="bio">Bio</FieldLabel>
                  <Textarea
                    id="bio"
                    name="bio"
                    placeholder="Type your Bio here."
                    defaultValue={state?.formData?.bio || ""}
                  />
                  <InputFieldsError field="bio" state={state} />
                </Field>

                {/* file */}
                <Field>
                  <FieldLabel htmlFor="file">Upload You Photo</FieldLabel>

                  <Input
                    // ref={fileInputRef}
                    // onChange={handleFileChange}
                    id="file"
                    name="file"
                    type="file"
                    accept="image/*"
                  />
                  <InputFieldsError field="icon" state={state} />
                </Field>
              </div>
              <FieldGroup className="mt-4">
                <Field>
                  <Button type="submit" disabled={isPending}>
                    Request to Host
                  </Button>
                </Field>
              </FieldGroup>
            </FieldGroup>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BecomeHostDialog;
