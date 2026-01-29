/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { getUserInfo } from "@/services/auth/getUserInfo";
import { initiatePayment } from "@/services/booking/booking.service";
import { IUser } from "@/types/user.interface";
import { useState } from "react";
import { toast } from "sonner";

const JoinEventButton = ({
  eventId,
  userInfo,
}: {
  eventId: string;
  userInfo: IUser;
}) => {
  const [_processingPaymentId, setProcessingPaymentId] = useState<
    string | null
  >(null);

  const handleEventJoin = async () => {
    if (userInfo.role === "ADMIN" || userInfo.role === "HOST") {
      toast.warning(
        `You are ${userInfo.role.toLocaleLowerCase()} you can not book this event`,
      );
      console.log(userInfo);
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
