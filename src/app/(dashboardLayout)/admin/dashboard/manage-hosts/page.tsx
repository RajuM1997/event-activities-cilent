import ManageHostTable from "@/components/Admin/ManageHost/ManageHostTable";
import { getEvents } from "@/services/event/event.service";

const ManageHostPage = async () => {
  const { data } = await getEvents();
  return (
    <div className="space-y-6 container mx-auto py-5">
      <ManageHostTable event={data || []} />
    </div>
  );
};

export default ManageHostPage;
