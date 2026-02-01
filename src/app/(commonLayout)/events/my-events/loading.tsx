import { TableSkeleton } from "@/components/Shared/TableSkeleton";

const UserEventLoading = () => {
  return (
    <div>
      <TableSkeleton columns={8} rows={10} />
    </div>
  );
};

export default UserEventLoading;
