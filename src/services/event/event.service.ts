import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { createEventValidationZodSchema } from "@/zod/event.validation";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const createEvent = async (
  _currentState: any,
  formData: any
): Promise<any> => {
  try {
    const payload = {
      eventName: formData.get("eventName"),
      date: formData.get("date"),
      category: formData.get("category"),
      location: formData.get("location"),
      minParticipants: formData.get("minParticipants"),
      joiningFee: formData.get("joiningFee"),
      description: formData.get("description"),
    };
    if (
      zodValidator(payload, createEventValidationZodSchema).success === false
    ) {
      return zodValidator(payload, createEventValidationZodSchema);
    }

    const validatedPayload: any = zodValidator(
      payload,
      createEventValidationZodSchema
    ).data;

    const eventData = {
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
    console.log(eventData);

    const newFormData = new FormData();
    newFormData.append("data", JSON.stringify(eventData));
    if (formData.get("file")) {
      newFormData.append("file", formData.get("file") as Blob);
    }
    const res = await serverFetch.post("/user/event", {
      body: newFormData,
    });
    const result = await res.json();
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
          : "Event Create Failed. Please try again."
      }`,
    };
  }
};
