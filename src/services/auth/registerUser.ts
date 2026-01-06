/* eslint-disable @typescript-eslint/no-explicit-any */

import { zodValidator } from "@/lib/zodValidator";
import { IUser } from "@/types/user.interface";
import { registerUserValidationZodSchema } from "@/zod/auth.validation";

export const registerUser = async (
  _currentState: any,
  formData: any
): Promise<any> => {
  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    bio: formData.get("bio"),
    interests: formData.get("interests"),
    location: {
      city: formData.get("city"),
      area: formData.get("area"),
      country: formData.get("country"),
    },
  };
  if (
    zodValidator(payload, registerUserValidationZodSchema).success === false
  ) {
    return zodValidator(payload, registerUserValidationZodSchema);
  }
  const validatedPayload: IUser | any = zodValidator(
    payload,
    registerUserValidationZodSchema
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
    location: {
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
  console.log(registerData);
};
