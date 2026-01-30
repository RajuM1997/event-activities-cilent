import HostMyEventsTable from "@/components/Modules/Host/MyEvent/HostMyEventTable";
import Pagination from "@/components/Shared/Pagination";
import { queryStringFormatter } from "@/lib/formatters";
import { getEvents } from "@/services/event/event.service";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Events",
  description: "Manage, review, update, and moderate all events on JoinUp.",
  openGraph: {
    title: "Manage Events | JoinUp",
    description: "Admin dashboard to manage and control all events on JoinUp.",
  },
};

const ManageEventsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const { data, meta } = await getEvents(queryString);
  return (
    <div className="space-y-6 container mx-auto py-5">
      <HostMyEventsTable event={data || []} />
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

export default ManageEventsPage;
