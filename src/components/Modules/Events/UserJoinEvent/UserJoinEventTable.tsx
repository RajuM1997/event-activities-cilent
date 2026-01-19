"use client";

import ManagementTable from "@/components/Shared/ManagementTable";
import { IBooking } from "@/types/event.interface";

import { toast } from "sonner";
import { userJoinEventColumns } from "./userJoinEventCall";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import DeleteConfirmationDialog from "@/components/Shared/DeleteConfirmationDialog";
import { cancelEventBooking } from "@/services/booking/booking.service";

interface UserJoinEventTableProps {
  event: IBooking[];
}

export default function UserEventsTable({
  event = [],
}: UserJoinEventTableProps) {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [bookingEvent, setBookingEvent] = useState<IBooking | null>(null);
  const [isCanceled, setIsCanceled] = useState(false);

  const bookingCancel = (event: IBooking) => {
    setBookingEvent(event);
  };

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const confirmDelete = async () => {
    if (!bookingEvent) return;

    setIsCanceled(true);
    const result = await cancelEventBooking(bookingEvent.id);
    setIsCanceled(false);

    if (result?.success) {
      toast.success(result.message || "Event deleted successfully");
      setBookingEvent(null);
      handleRefresh();
    } else {
      toast.error(result.message || "Failed to delete doctor");
    }
  };

  return (
    <>
      <ManagementTable
        data={event}
        columns={userJoinEventColumns}
        onCancel={bookingCancel}
        getRowKey={(event) => event?.id as string}
        emptyMessage="No Events found"
      />
      <DeleteConfirmationDialog
        open={!!bookingEvent}
        onOpenChange={(open) => !open && setBookingEvent(null)}
        onConfirm={confirmDelete}
        title="Cancel Event Booking"
        description={`Are you sure you want to cancel booking ${bookingEvent?.eventName}? This action cannot be undone.`}
        isDeleting={isCanceled}
      />
    </>
  );
}
