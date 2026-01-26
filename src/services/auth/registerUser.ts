"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { IUser } from "@/types/user.interface";
import { registerUserValidationZodSchema } from "@/zod/auth.validation";
import { loginUser } from "./loginUser";
import { revalidateTag } from "next/cache";

export const registerUser = async (
  _currentState: any,
  formData: any,
): Promise<any> => {
  try {
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
      bio: formData.get("bio"),
      interests: formData.get("interests"),
      city: formData.get("city"),
      area: formData.get("area"),
      country: formData.get("country"),
    };

    if (
      zodValidator(payload, registerUserValidationZodSchema).success === false
    ) {
      return zodValidator(payload, registerUserValidationZodSchema);
    }

    const validatedPayload: IUser | any = zodValidator(
      payload,
      registerUserValidationZodSchema,
    ).data;

    const registerData = {
      password: validatedPayload.password,
      userData: {
        name: validatedPayload.name,
        email: validatedPayload.email,
        password: validatedPayload.password,
        bio: validatedPayload.bio,
        interests: validatedPayload.interests,
      },
      locationData: {
        city: validatedPayload.city,
        area: validatedPayload.area,
        country: validatedPayload.country,
      },
    };

    const newFormData = new FormData();
    newFormData.append("data", JSON.stringify(registerData));
    if (formData.get("file")) {
      newFormData.append("file", formData.get("file") as Blob);
    }
    const res = await serverFetch.post("/user/create-user", {
      body: newFormData,
    });
    const result = await res.json();
    if (result.success) {
      revalidateTag("user-info", { expire: 0 });
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
          : "Registration Failed. Please try again."
      }`,
    };
  }
};
