import Link from "next/link";
import { Button } from "@/components/ui/button";
import EventCard from "../Modules/Events/EventCard";
import { IEvent } from "@/types/event.interface";

export default function EventSection({ events }: { events: IEvent[] }) {
  return (
    <section className="py-16 bg-linear-to-b from-green-50/50 to-white/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <p className="mt-2 text-muted-foreground">
              Don’t miss out on exciting events
            </p>
          </div>

          <Link href="/events">
            <Button variant="outline">View All</Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
