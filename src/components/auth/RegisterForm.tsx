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
import InputFieldsError from "../Shared/InputFieldsError";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(registerUser, null);
  // const fileInputRef = useRef<HTMLInputElement>(null);
  // const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   setSelectedFile(file || null);
  // };

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
            <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
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
          {/* interests */}
          <Field>
            <FieldLabel htmlFor="interests">Interests</FieldLabel>
            <Select name="interests">
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
            <Textarea id="bio" name="bio" placeholder="Type your Bio here." />
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
