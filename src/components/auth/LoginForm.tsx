"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "../ui/field";

const LoginForm = () => {
  return (
    <form action={""}>
      {/* {redirect && <input type="hidden" name="redirect" value={redirect} />} */}
      <FieldGroup>
        <div className="grid grid-cols-1  gap-4">
          {/* email */}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@gmail.com"
            />
            {/* <InputFieldsError field="email" state={state} /> */}
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
            {/* <InputFieldsError field="password" state={state} /> */}
          </Field>
        </div>
        <FieldGroup className="mt-4">
          <Field>
            <Button
              type="submit"
              //   disabled={isPending}
            >
              {/* {isPending ? "Logging in..." : "Login"} */}
              Login
            </Button>
            <Button variant={"outline"} type="button">
              Sign up with google
            </Button>
            <FieldDescription className="px-6 text-center">
              Don&apos;t have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </FieldDescription>
            <FieldDescription className="px-6 text-center">
              <a
                href="/forget-password"
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
};

export default LoginForm;
