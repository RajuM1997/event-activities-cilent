import { Card, CardContent } from "@/components/ui/card";
import { IEvent } from "@/types/event.interface";
import Image from "next/image";

const EventCard = ({ event }: { event: IEvent }) => {
  return (
    <Card className="py-0" key={event.eventName}>
      <Image
        src={event.image}
        alt={event.eventName}
        width={400}
        height={300}
        className="w-full rounded-t-lg"
      />
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg">{event.eventName}</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {event.date} • {event.location}
        </p>
      </CardContent>
    </Card>
  );
};

export default EventCard;
