import UserEventsTable from "@/components/Modules/Events/UserJoinEvent/UserJoinEventTable";
import { getUserJoiningEvents } from "@/services/event/event.service";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Joined Events",
  description:
    "View events you have joined and keep track of upcoming activities on JoinUp.",
  openGraph: {
    title: "My Joined Events | JoinUp",
    description: "Manage and track the events you have joined using JoinUp.",
  },
};

const MyJoinEventPage = async () => {
  const { data } = await getUserJoiningEvents();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <UserEventsTable event={data?.booking || []} />
      </div>
    </section>
  );
};

export default MyJoinEventPage;
