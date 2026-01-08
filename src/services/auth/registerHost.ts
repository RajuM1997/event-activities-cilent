/* eslint-disable @typescript-eslint/no-explicit-any */

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { IUser } from "@/types/user.interface";
import { registerHostValidationZodSchema } from "@/zod/auth.validation";
import { loginUser } from "./loginUser";

export const registerHost = async (
  _currentState: any,
  formData: any
): Promise<any> => {
  try {
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
      bio: formData.get("bio"),
      address: formData.get("address"),
      phoneNumber: formData.get("phoneNumber"),
    };
    console.log({ payload });

    console.log(payload, registerHostValidationZodSchema);

    if (
      zodValidator(payload, registerHostValidationZodSchema).success === false
    ) {
      return zodValidator(payload, registerHostValidationZodSchema);
    }

    const validatedPayload: IUser | any = zodValidator(
      payload,
      registerHostValidationZodSchema
    ).data;

    const registerData = {
      password: validatedPayload.password,
      hostData: {
        name: validatedPayload.name,
        email: validatedPayload.email,
        password: validatedPayload.password,
        bio: validatedPayload.bio,
        address: validatedPayload.address,
        phoneNumber: validatedPayload.phoneNumber,
      },
    };
    console.log(registerData);

    const newFormData = new FormData();
    newFormData.append("data", JSON.stringify(registerData));
    if (formData.get("file")) {
      newFormData.append("file", formData.get("file") as Blob);
    }
    const res = await serverFetch.post("/user/create-host", {
      body: newFormData,
    });
    const result = await res.json();
    if (result.success) {
      await loginUser(_currentState, formData);
    }
    return result;
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Host registration Failed. Please try again."
      }`,
    };
  }
};
