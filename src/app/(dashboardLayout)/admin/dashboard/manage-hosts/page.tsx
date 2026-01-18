import ManageHostTable from "@/components/Admin/ManageHost/ManageHostTable";
import { getHosts } from "@/services/admin/hostManagement";

const ManageHostPage = async () => {
  const { data } = await getHosts();
  console.log(data);

  return (
    <div className="space-y-6 container mx-auto py-5">
      <ManageHostTable user={data || []} />
    </div>
  );
};

export default ManageHostPage;
