import ManageUserTable from "@/components/Admin/ManageUser/ManageUserTable";
import Pagination from "@/components/Shared/Pagination";
import { queryStringFormatter } from "@/lib/formatters";
import { getAllUsers } from "@/services/admin/userManagement";

const ManageUserPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const { data, meta } = await getAllUsers(queryString);

  return (
    <div className="space-y-6 container mx-auto py-5">
      <ManageUserTable user={data || []} />
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

export default ManageUserPage;
