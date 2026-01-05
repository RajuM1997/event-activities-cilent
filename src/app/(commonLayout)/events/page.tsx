import EventCard from "@/components/Modules/Events/EventCard";
import EventSearchOption from "@/components/Modules/Events/EventSearchOption";
import { events } from "@/data/homePageData";

const EventPage = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="pb-15">
          <EventSearchOption />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <EventCard event={event} key={event.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventPage;
