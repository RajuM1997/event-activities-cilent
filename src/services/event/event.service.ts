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
      maxParticipants: formData.get("maxParticipants"),
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
      eventData: {
        eventName: validatedPayload.eventName,
        date: validatedPayload.date,
        category: validatedPayload.category,
        description: validatedPayload.description,
        location: validatedPayload.location,
        minParticipants: Number(validatedPayload.minParticipants),
        maxParticipants: Number(validatedPayload.maxParticipants),
        joiningFee: Number(validatedPayload.joiningFee),
      },
    };
    console.log(eventData);

    const newFormData = new FormData();
    newFormData.append("data", JSON.stringify(eventData));
    if (formData.get("file")) {
      newFormData.append("file", formData.get("file") as Blob);
    }
    const res = await serverFetch.post("/event", {
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

export const getEvents = async () => {
  try {
    const res = await serverFetch.get("/event");
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

export const updateEvent = async (id: string) => {
  console.log(id);
  return { success: true, message: "update Successfully" };
};

export const deleteEvent = async (id: string) => {
  console.log(id);
  return { success: true, message: "update Successfully" };
};
