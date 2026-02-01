/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { getUserInfo } from "@/services/auth/getUserInfo";
import { initiatePayment } from "@/services/booking/booking.service";
import { IEvent } from "@/types/event.interface";
import { IUser } from "@/types/user.interface";
import { useState } from "react";
import { toast } from "sonner";

const JoinEventButton = ({
  eventId,
  userInfo,
  event,
}: {
  eventId: string;
  userInfo: IUser;
  event: IEvent;
}) => {
  const [_processingPaymentId, setProcessingPaymentId] = useState<
    string | null
  >(null);

  const handleEventJoin = async () => {
    if (userInfo.role === "ADMIN" || userInfo.role === "HOST") {
      toast.warning(
        `You are ${userInfo.role.toLocaleLowerCase()} you can not book this event`,
      );
      return;
    }
    if (event.status === "CANCELLED") {
      toast.warning(
        `You can't join this this event. This event already cancel`,
      );
      return;
    }
    if (event.status === "FULL") {
      toast.warning(
        `You can't join this this event this event participant already full`,
      );
      return;
    }

    setProcessingPaymentId(eventId);
    try {
      const result = await initiatePayment(eventId);

      if (result.success && result.data?.paymentUrl) {
        toast.success("Redirecting to payment...");
        sessionStorage.setItem(
          "paymentReturnUrl",
          "/dashboard/my-appointments",
        );
        window.location.replace(result.data.paymentUrl);
      } else {
        toast.error(result.message || "Failed to initiate payment");
        setProcessingPaymentId(null);
      }
    } catch (error) {
      toast.error("An error occurred while initiating payment");
      setProcessingPaymentId(null);
      console.error(error);
    }
  };

  return (
    <button
      className="w-full rounded-xl bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90 transition"
      onClick={handleEventJoin}
    >
      Join Event
    </button>
  );
};

export default JoinEventButton;
