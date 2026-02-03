"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverFetch } from "@/lib/server-fetch";
import { revalidateTag } from "next/cache";

export async function initiatePayment(eventId: string) {
  try {
    const response = await serverFetch.patch(`/event/join-event/${eventId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (result.success) {
      revalidateTag("ser-event-list", { expire: 0 });
    }
    return result;
  } catch (error: any) {
    console.error("Error initiating payment:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to initiate payment",
    };
  }
}

export const cancelEventBooking = async (
  bookingId: string,
  eventId: string,
) => {
  try {
    const response = await serverFetch.patch(
      `/event/cancel-event/${eventId}?bookingId=${bookingId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const result = await response.json();
    if (result.success) {
      revalidateTag("user-event-list", { expire: 0 });
    }
    return result;
  } catch (error: any) {
    console.error("Error cancel join event:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to cancel join event",
    };
  }
};
