"use client";

import ManagementTable from "@/components/Shared/ManagementTable";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { IUser } from "@/types/user.interface";
import ManageHostDialog from "./ManageHostDialog";
import { manageHostColumns } from "./manageHostColumns";

interface MyEventTableProps {
  user: IUser[];
}

export default function ManageUserTable({ user = [] }: MyEventTableProps) {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [editedUser, setEditedUser] = useState<IUser | null>(null);

  const handleEditClick = (user: IUser) => {
    if (user?.host?.status === "DELETE") {
      toast.error("Cannot change status for deleted user", {
        description: "deleted user are final and cannot be modified.",
      });
      return;
    }

    setEditedUser(user);
  };

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };
  return (
    <>
      <ManagementTable
        data={user}
        columns={manageHostColumns}
        onEdit={handleEditClick}
        getRowKey={(user) => user?.id as string}
        emptyMessage="No Host found"
      />

      <ManageHostDialog
        open={!!editedUser}
        onClose={() => setEditedUser(null)}
        user={editedUser!}
        onSuccess={() => {
          setEditedUser(null);
          handleRefresh();
        }}
      />
    </>
  );
}
