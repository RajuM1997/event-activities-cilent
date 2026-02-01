import { TableSkeleton } from "@/components/Shared/TableSkeleton";

const HostMyLoading = () => {
  return (
    <div>
      <TableSkeleton columns={8} rows={10} />
    </div>
  );
};

export default HostMyLoading;
