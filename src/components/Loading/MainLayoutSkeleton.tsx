import { Skeleton } from "@/components/ui/skeleton";

const CommonLayoutSkeleton = () => {
  return (
    <div className="space-y-6 p-6">
      {/* Navbar */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-8 w-40" />
      </div>

      {/* Page Content */}
      <div className="grid gap-6 md:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-40 rounded-xl" />
        ))}
      </div>
    </div>
  );
};

export default CommonLayoutSkeleton;
