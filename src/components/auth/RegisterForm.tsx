"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { registerUser } from "@/services/auth/registerUser";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import InputFieldsError from "../Shared/InputFiledsError";
import { Textarea } from "../ui/textarea";

const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(registerUser, null);

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={formAction}>
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
            />
            <InputFieldsError field="password" state={state} />
          </Field>
          {/* password */}
          <Field>
            <FieldLabel htmlFor="confirmPassword">Password</FieldLabel>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="*******"
            />
            <InputFieldsError field="confirmPassword" state={state} />
          </Field>
          {/* city */}
          <Field>
            <FieldLabel htmlFor="city">City</FieldLabel>
            <Input
              id="city"
              name="city"
              type="text"
              placeholder="Type your city here"
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
            />

            <InputFieldsError field="name" state={state} />
          </Field>
          {/* bio */}
          <Field>
            <FieldLabel htmlFor="bio">Bio</FieldLabel>
            <Textarea id="bio" name="bio" placeholder="Type your Bio here." />
            <InputFieldsError field="bio" state={state} />
          </Field>
        </div>
        <FieldGroup className="mt-4">
          <Field>
            <Button type="submit" disabled={isPending}>
              Create Account
            </Button>
            <Button variant={"outline"} type="button">
              Sign up with google
            </Button>
            <FieldDescription className="px-6 text-center">
              Already have an account?
              <a href="/login" className="text-blue-600 hover:underline">
                Sign in
              </a>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
};

export default RegisterForm;
