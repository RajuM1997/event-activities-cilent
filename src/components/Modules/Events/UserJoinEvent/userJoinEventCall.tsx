/* eslint-disable @typescript-eslint/no-explicit-any */

import { Column } from "@/components/Shared/ManagementTable";
import { Badge } from "@/components/ui/badge";
import { BookingStatus, EventStatus, IBooking } from "@/types/event.interface";
import { format } from "date-fns";

const statusConfig: Record<
  BookingStatus,
  { variant: any; label: string; className?: string }
> = {
  [BookingStatus.BOOKED]: {
    variant: "default",
    label: "Booked",
    className: "bg-blue-500 hover:bg-blue-600",
  },
  [BookingStatus.CANCELLED]: {
    variant: "destructive",
    label: "Canceled",
  },
};

export const userJoinEventColumns: Column<IBooking>[] = [
  {
    header: "Event Name",
    accessor: (event) => (
      <div className="flex items-center gap-2">
        <div>
          <p className="font-medium">{event.event?.eventName || "N/A"}</p>
          {/* <p className="text-xs text-muted-foreground">
            {event.patient?.email || ""}
          </p> */}
        </div>
      </div>
    ),
  },
  {
    header: "Date",
    accessor: (event) => {
      if (!event?.event?.date) return "N/A";
      return (
        <div className="text-sm p-2 space-y-1">
          <p className="font-medium">
            {format(new Date(event?.event?.date), "MMM d, yyyy")}
          </p>
          <p className="text-muted-foreground">
            {format(new Date(event?.event?.date), "h:mm a")} -{" "}
          </p>
          {event.status === EventStatus.OPEN && event?.event?.date && (
            <div className="pt-1">
              {/* <AppointmentCountdown
                  appointmentDateTime={appointment.schedule.startDateTime}
                  className="text-xs"
                /> */}
            </div>
          )}
        </div>
      );
    },
  },
  {
    header: "Amount",
    accessor: (event) => (
      <span className="text-sm p-2 font-semibold text-green-600">
        {event.amount}
      </span>
    ),
  },
  {
    header: "Payment Status",
    accessor: (event) => (
      <span className="text-sm p-2 font-semibold text-base-600">
        {event.status}
      </span>
    ),
  },
  {
    header: "Status",
    accessor: (booking) => {
      const config = statusConfig[booking.bookingStatus];
      console.log(BookingStatus.BOOKED);

      return (
        <Badge variant={config?.variant} className={config?.className}>
          {config?.label}
        </Badge>
      );
    },
  },
];
