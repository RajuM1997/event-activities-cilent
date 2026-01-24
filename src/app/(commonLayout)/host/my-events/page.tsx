import HostMyEventsTable from "@/components/Modules/Host/MyEvent/HostMyEventTable";
import Pagination from "@/components/Shared/Pagination";
import { queryStringFormatter } from "@/lib/formatters";
import { getHostEvents } from "@/services/event/event.service";

const CreateEventPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const { data, meta } = await getHostEvents(queryString);

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

export default CreateEventPage;
