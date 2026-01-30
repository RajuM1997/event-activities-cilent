import EventCard from "@/components/Modules/Events/EventCard";
import EventSearchOption from "@/components/Modules/Events/EventSearchOption";
import Pagination from "@/components/Shared/Pagination";
import { queryStringFormatter } from "@/lib/formatters";
import { getEvents } from "@/services/event/event.service";
import { IEvent } from "@/types/event.interface";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Events",
  description:
    "Discover all upcoming events on JoinUp. Browse events by date, location, and interests.",
  openGraph: {
    title: "All Events | JoinUp",
    description:
      "Explore all upcoming events and activities happening around you on JoinUp.",
  },
};

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
        <div className="grid grid-cols-12 gap-6 pt-10">
          <div className="col-span-12 lg:col-span-3">
            <EventSearchOption />
          </div>

          {data?.length > 0 && (
            <div className="col-span-12 lg:col-span-9 grid gap-6 md:grid-cols-3">
              {data?.map((event: IEvent) => (
                <EventCard event={event} key={event.eventName} />
              ))}
            </div>
          )}
          {data?.length === 0 && (
            <p className="text-xl text-center col-span-9 p-5 h-full flex justify-center items-center">
              No events found. Check back soon for upcoming events!
            </p>
          )}
        </div>
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
