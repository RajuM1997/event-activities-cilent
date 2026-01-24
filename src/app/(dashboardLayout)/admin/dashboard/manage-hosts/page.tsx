import ManageHostTable from "@/components/Admin/ManageHost/ManageHostTable";
import Pagination from "@/components/Shared/Pagination";
import { queryStringFormatter } from "@/lib/formatters";
import { getHosts } from "@/services/admin/hostManagement";

const ManageHostPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const { data, meta } = await getHosts(queryString);

  return (
    <div className="space-y-6 container mx-auto py-5">
      <ManageHostTable user={data || []} />
      {meta?.totalPages > 1 && (
        <section className="pt-5">
          <Pagination
            totalPages={meta?.totalPages || 1}
            currentPage={meta?.page || 1}
          />
        </section>
      )}
    </div>
  );
};

export default ManageHostPage;
