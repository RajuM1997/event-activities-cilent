"use client";

import ManagementTable from "@/components/Shared/ManagementTable";
import { EventStatus, IEvent } from "@/types/event.interface";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { deleteEvent } from "@/services/event/event.service";
import DeleteConfirmationDialog from "@/components/Shared/DeleteConfirmationDialog";
import { manageUserColumns } from "./manageUserColumns";
import ManageHostDialog from "../ManageHost/ManageHostDialog";

interface MyEventTableProps {
  event: IEvent[];
}

export default function ManageUserTable({ event = [] }: MyEventTableProps) {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [editedEvent, setEditedEvent] = useState<IEvent | null>(null);
  const [deletingEvent, setDeletingEvent] = useState<IEvent | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleEditClick = (event: IEvent) => {
    if (event.status === EventStatus.CANCELLED) {
      toast.error("Cannot change status for canceled event", {
        description: "Canceled events are final and cannot be modified.",
      });
      return;
    }

    setEditedEvent(event);
  };

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleDelete = (event: IEvent) => {
    setDeletingEvent(event);
  };

  const confirmDelete = async () => {
    if (!deletingEvent) return;

    setIsDeleting(true);
    const result = await deleteEvent(deletingEvent.id!);
    setIsDeleting(false);

    if (result?.success) {
      toast.success(result.message || "Event deleted successfully");
      setDeletingEvent(null);
      handleRefresh();
    } else {
      toast.error(result.message || "Failed to delete doctor");
    }
  };
  return (
    <>
      <ManagementTable
        data={event}
        columns={manageUserColumns}
        onDelete={handleDelete}
        onEdit={handleEditClick}
        getRowKey={(event) => event?.id as string}
        emptyMessage="No Events found"
      />

      <ManageHostDialog
        open={!!editedEvent}
        onClose={() => setEditedEvent(null)}
        event={editedEvent!}
        onSuccess={() => {
          setEditedEvent(null);
          handleRefresh();
        }}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog
        open={!!deletingEvent}
        onOpenChange={(open) => !open && setDeletingEvent(null)}
        onConfirm={confirmDelete}
        title="Delete Event"
        description={`Are you sure you want to delete ${deletingEvent?.eventName}? This action cannot be undone.`}
        isDeleting={isDeleting}
      />
    </>
  );
}
