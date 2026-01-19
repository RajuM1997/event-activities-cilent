/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverFetch } from "@/lib/server-fetch";

export async function initiatePayment(eventId: string) {
  try {
    const response = await serverFetch.patch(`/event/join-event/${eventId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
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

export const cancelEventBooking = async (bookingId: string) => {
  try {
    const response = await serverFetch.patch(
      `/event/cancel-event/${bookingId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const result = await response.json();
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
};
