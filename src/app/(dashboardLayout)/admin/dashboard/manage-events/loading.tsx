import { TableSkeleton } from "@/components/Shared/TableSkeleton";

const ManageEventLoading = () => {
  return (
    <div>
      <TableSkeleton columns={8} rows={10} />
    </div>
  );
};

export default ManageEventLoading;
