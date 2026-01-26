"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { IUser } from "@/types/user.interface";
import {
  updateHostUserValidationZodSchema,
  updateUserUserValidationZodSchema,
} from "@/zod/auth.validation";
import { revalidateTag } from "next/cache";

export const updateUserProfile = async (
  _currentState: any,
  formData: any,
): Promise<any> => {
  try {
    const payload = {
      name: formData.get("name"),
      bio: formData.get("bio"),
      interests: formData.get("interests"),
      city: formData.get("city"),
      area: formData.get("area"),
      country: formData.get("country"),
    };

    if (
      zodValidator(payload, updateUserUserValidationZodSchema).success === false
    ) {
      return zodValidator(payload, updateUserUserValidationZodSchema);
    }

    const validatedPayload: IUser | any = zodValidator(
      payload,
      updateUserUserValidationZodSchema,
    ).data;

    const registerData = {
      userData: {
        name: validatedPayload.name,
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
    const res = await serverFetch.patch("/user/update-user-profile", {
      body: newFormData,
    });
    const result = await res.json();
    if (result.success) {
      revalidateTag("user-info", { expire: 0 });
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
          : "Profile Update Failed. Please try again."
      }`,
    };
  }
};

export const updateHostProfile = async (
  _currentState: any,
  formData: any,
): Promise<any> => {
  try {
    const payload = {
      name: formData?.get("name"),
      bio: formData?.get("bio"),
      address: formData?.get("address"),
      phoneNumber: formData?.get("phoneNumber"),
    };

    if (
      zodValidator(payload, updateHostUserValidationZodSchema).success === false
    ) {
      return zodValidator(payload, updateHostUserValidationZodSchema);
    }

    const validatedPayload: IUser | any = zodValidator(
      payload,
      updateHostUserValidationZodSchema,
    ).data;

    const registerData = {
      hostData: {
        name: validatedPayload.name,
        bio: validatedPayload.bio,
        address: validatedPayload.address,
        phoneNumber: validatedPayload.phoneNumber,
      },
    };

    const newFormData = new FormData();
    newFormData.append("data", JSON.stringify(registerData));
    if (formData.get("file")) {
      newFormData.append("file", formData.get("file") as Blob);
    }
    const res = await serverFetch.patch("/user/update-host-profile", {
      body: newFormData,
    });
    const result = await res.json();
    if (result.success) {
      revalidateTag("user-info", { expire: 0 });
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
          : "Profile Update Failed. Please try again."
      }`,
    };
  }
};
