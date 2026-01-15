/* eslint-disable @typescript-eslint/no-explicit-any */

import { Column } from "@/components/Shared/ManagementTable";
import { Badge } from "@/components/ui/badge";
import { EventStatus, IEvent } from "@/types/event.interface";
import { format } from "date-fns";

const statusConfig: Record<
  EventStatus,
  { variant: any; label: string; className?: string }
> = {
  [EventStatus.OPEN]: {
    variant: "default",
    label: "Open",
    className: "bg-blue-500 hover:bg-blue-600",
  },
  [EventStatus.FULL]: {
    variant: "secondary",
    label: "Full",
  },
  [EventStatus.COMPLETED]: {
    variant: "default",
    label: "Completed",
    className: "bg-green-500 hover:bg-green-600",
  },
  [EventStatus.CANCELLED]: {
    variant: "destructive",
    label: "Canceled",
  },
};

export const manageHostColumns: Column<IEvent>[] = [
  {
    header: "Event Name",
    accessor: (event) => (
      <div className="flex items-center gap-2">
        <div>
          <p className="font-medium">{event.eventName || "N/A"}</p>
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
      if (!event?.date) return "N/A";
      return (
        <div className="text-sm p-2 space-y-1">
          <p className="font-medium">
            {format(new Date(event?.date), "MMM d, yyyy")}
          </p>
          <p className="text-muted-foreground">
            {format(new Date(event?.date), "h:mm a")} -{" "}
          </p>
          {event.status === EventStatus.OPEN && event.date && (
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
    sortKey: "event.date",
  },
  {
    header: "Joining Fee",
    accessor: (event) => (
      <span className="text-sm p-2 font-semibold text-green-600">
        ${event.joiningFee}
      </span>
    ),
    sortKey: "Join_Fee",
  },
  {
    header: "Min Participants",
    accessor: (event) => (
      <span className="text-sm p-2 font-semibold text-base-600">
        {event.minParticipants}
      </span>
    ),
    sortKey: "minParticipants",
  },
  {
    header: "Category",
    accessor: (event) => (
      <span className="text-sm p-2 font-semibold text-base-600">
        {event.category}
      </span>
    ),
    sortKey: "category",
  },
  {
    header: "Max Participants",
    accessor: (event) => (
      <span className="text-sm p-2 font-semibold text-base-600">
        {event.maxParticipants}
      </span>
    ),
    sortKey: "maxParticipants",
  },
  {
    header: "Status",
    accessor: () => {
      const config = statusConfig[0];
      return (
        <Badge variant={config?.variant} className={config?.className}>
          {config.label}
        </Badge>
      );
    },
  },
];
