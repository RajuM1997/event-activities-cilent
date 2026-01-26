import EventCard from "@/components/Modules/Events/EventCard";
import EventSearchOption from "@/components/Modules/Events/EventSearchOption";
import Pagination from "@/components/Shared/Pagination";
import { queryStringFormatter } from "@/lib/formatters";
import { getEvents } from "@/services/event/event.service";
import { IEvent } from "@/types/event.interface";

const EventPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const { data, meta } = await getEvents(queryString);

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center lg:px-30 py-5">
          <h2 className="text-3xl font-bold pb-5">
            Find Your Next Event with JoinUp
          </h2>
          <p>
            JoinUp brings people together through events you’ll love. Browse
            concerts, comedy shows, movie nights, and developer meetups—all in
            one place. Pick an event, join in, and connect with your community.
          </p>
        </div>
        {data.length > 0 && (
          <div className="pb-15">
            <EventSearchOption />
          </div>
        )}
        <div className="grid gap-6 md:grid-cols-3">
          {data.length > 0 &&
            data?.map((event: IEvent) => (
              <EventCard event={event} key={event.eventName} />
            ))}
        </div>
        {data.length === 0 && (
          <p className="text-xl text-center p-5 h-full flex justify-center items-center">
            No events found. Check back soon for upcoming events!
          </p>
        )}
        {meta?.totalPages > 1 && (
          <section className="pt-5">
            <Pagination
              totalPages={meta?.totalPages || 1}
              currentPage={meta?.page || 1}
            />
          </section>
        )}
      </div>
    </section>
  );
};

export default EventPage;
