import ProfileMain from "@/components/auth/ProfileMain";
import { getUserInfo } from "@/services/auth/getUserInfo";

const ProfilePage = async () => {
  const userProfile = await getUserInfo();

  return (
    <div>
      <ProfileMain userProfile={userProfile} />
    </div>
  );
};

export default ProfilePage;
