import HostMyEventsTable from "@/components/Modules/Host/MyEvent/HostMyEventTable";
import { getHostEvents } from "@/services/event/event.service";

const CreateEventPage = async () => {
  const { data } = await getHostEvents();
  console.log({ data });

  return (
    <div className="space-y-6 container mx-auto py-5">
      <HostMyEventsTable event={data || []} />
    </div>
  );
};

export default CreateEventPage;
