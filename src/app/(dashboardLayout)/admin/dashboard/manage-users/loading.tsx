import { TableSkeleton } from "@/components/Shared/TableSkeleton";

const ManageUserLoading = () => {
  return (
    <div>
      <TableSkeleton columns={8} rows={10} />
    </div>
  );
};

export default ManageUserLoading;
