"use client";

import { IUser } from "@/types/user.interface";
import ProfileComponent from "./ProfileComponent";
import UpdateUserFormDialog from "./UpdateUserDialog";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

const ProfileMain = ({ userProfile }: { userProfile: IUser }) => {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [editedUser, setEditedUser] = useState<IUser | null>(null);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };
  console.log({ editedUser });

  return (
    <section>
      <ProfileComponent user={userProfile} setEditedUser={setEditedUser} />
      <UpdateUserFormDialog
        open={!!editedUser}
        onClose={() => setEditedUser(null)}
        user={userProfile}
        onSuccess={() => {
          setEditedUser(null);
          handleRefresh();
        }}
      />
    </section>
  );
};

export default ProfileMain;
