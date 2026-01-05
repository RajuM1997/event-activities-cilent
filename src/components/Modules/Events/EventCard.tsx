import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface EventProps {
  title: string;
  location: string;
  image: string;
  date: string;
}

const EventCard = ({ event }: { event: EventProps }) => {
  return (
    <Card className="py-0" key={event.title}>
      <Image
        src={event.image}
        alt={event.title}
        width={400}
        height={300}
        className="w-full rounded-t-lg"
      />
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg">{event.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {event.date} • {event.location}
        </p>
      </CardContent>
    </Card>
  );
};

export default EventCard;
