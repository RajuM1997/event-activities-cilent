import ProfileMain from "@/components/auth/ProfileMain";
import { getUserInfo } from "@/services/auth/getUserInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Profile",
  description:
    "View and update your profile information, preferences, and hosted events on JoinUp.",
  openGraph: {
    title: "My Profile | JoinUp",
    description: "Manage your personal profile and event settings on JoinUp.",
  },
};

const ProfilePage = async () => {
  const userProfile = await getUserInfo();

  return (
    <div>
      <ProfileMain userProfile={userProfile} />
    </div>
  );
};

export default ProfilePage;
