import ManageUserTable from "@/components/Admin/ManageUser/ManageUserTable";
import { getAllUsers } from "@/services/admin/userManagement";

const ManageUserPage = async () => {
  const { data } = await getAllUsers();

  return (
    <div className="space-y-6 container mx-auto py-5">
      <ManageUserTable user={data || []} />
    </div>
  );
};

export default ManageUserPage;
