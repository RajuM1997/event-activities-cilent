"use client";

import { initiatePayment } from "@/services/booking/booking.service";
import { useState } from "react";
import { toast } from "sonner";

const JoinEventButton = ({ eventId }: { eventId: string }) => {
  const [processingPaymentId, setProcessingPaymentId] = useState<string | null>(
    null,
  );

  const handleEventJoin = async () => {
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

  console.log(processingPaymentId);

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
