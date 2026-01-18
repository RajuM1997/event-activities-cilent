import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import {
  createEventValidationZodSchema,
  updateEventValidationZodSchema,
} from "@/zod/event.validation";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const createEvent = async (
  _currentState: any,
  formData: any,
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
      createEventValidationZodSchema,
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
          : "Event Get Failed. Please try again."
      }`,
    };
  }
};

export const getHostEvents = async () => {
  try {
    const res = await serverFetch.get("/event/my-events?isDeleted=false");
    const result = await res.json();
    console.log(result);

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
          : "Event get Failed. Please try again."
      }`,
    };
  }
};

export const getEventById = async (id: string) => {
  try {
    const res = await serverFetch.get(`/event/${id}`);
    return res.json();
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
          : "Event Fetch Failed. Please try again."
      }`,
    };
  }
};

export const updateEvent = async (
  id: string,
  _currentState: any,
  formData: any,
) => {
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
      zodValidator(payload, updateEventValidationZodSchema).success === false
    ) {
      return zodValidator(payload, updateEventValidationZodSchema);
    }

    const validatedPayload: any = zodValidator(
      payload,
      updateEventValidationZodSchema,
    ).data;

    const eventData = {
      eventData: {
        eventName: validatedPayload.eventName,
        date: new Date(validatedPayload.date),
        category: validatedPayload.category,
        description: validatedPayload.description,
        location: validatedPayload.location,
        minParticipants: Number(validatedPayload.minParticipants),
        maxParticipants: Number(validatedPayload.maxParticipants),
        joiningFee: Number(validatedPayload.joiningFee),
      },
    };

    const newFormData = new FormData();
    newFormData.append("data", JSON.stringify(eventData));
    if (formData.get("file")) {
      newFormData.append("file", formData.get("file") as Blob);
    }
    const res = await serverFetch.patch(`/event/${id}`, {
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
          : "Event Updated Failed. Please try again."
      }`,
    };
  }
};

export const softDeleteEvent = async (id: string) => {
  try {
    const res = await serverFetch.patch(`/event/soft-delete/${id}`, {
      headers: { "Content-Type": "application/json" },
      body: null,
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
          : "Event Updated Failed. Please try again."
      }`,
    };
  }
};

export const deleteEvent = async (id: string) => {
  try {
    await serverFetch.delete(`/event/${id}`);
    return {
      success: true,
      message: "Event Delete",
    };
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
          : "Event Delete Failed. Please try again."
      }`,
    };
  }
};
