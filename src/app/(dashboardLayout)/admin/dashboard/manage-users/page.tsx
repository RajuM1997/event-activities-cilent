import ManageUserTable from "@/components/Admin/ManageUser/ManageUserTable";
import { getEvents } from "@/services/event/event.service";

const ManageUserPage = async () => {
  const { data } = await getEvents();
  return (
    <div className="space-y-6 container mx-auto py-5">
      <ManageUserTable event={data || []} />
    </div>
  );
};

export default ManageUserPage;
