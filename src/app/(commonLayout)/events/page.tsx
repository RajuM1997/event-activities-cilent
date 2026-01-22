import EventCard from "@/components/Modules/Events/EventCard";
import EventSearchOption from "@/components/Modules/Events/EventSearchOption";
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
  const { data } = await getEvents(queryString);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="pb-15">
          <EventSearchOption />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {data?.map((event: IEvent) => (
            <EventCard event={event} key={event.eventName} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventPage;
