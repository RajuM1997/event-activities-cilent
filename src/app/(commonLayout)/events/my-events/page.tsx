import UserEventsTable from "@/components/Modules/Events/UserJoinEvent/UserJoinEventTable";
import { getUserInfo } from "@/services/auth/getUserInfo";

const MyJoinEventPage = async () => {
  const userInfo = await getUserInfo();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <UserEventsTable event={userInfo.booking || []} />
      </div>
    </section>
  );
};

export default MyJoinEventPage;
