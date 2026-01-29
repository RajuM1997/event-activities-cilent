import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IEvent } from "@/types/event.interface";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Users } from "lucide-react";

const EventCard = ({ event }: { event: IEvent }) => {
  const eventDate = new Date(event.date);

  const formattedDate = eventDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const formattedTime = eventDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <Card className="overflow-hidden py-0 hover:shadow-lg transition-shadow rounded-2xl">
      {/* Image */}
      <div className="relative">
        <Image
          src={event.image}
          alt={event.eventName}
          width={400}
          height={300}
          className="h-full w-full object-cover"
        />

        {/* Date Badge */}
        <div className="absolute top-3 left-3 rounded-lg bg-white/90 px-3 py-1 text-xs font-semibold shadow">
          {formattedDate}
        </div>
      </div>

      <CardContent className="p-5 space-y-3">
        {/* Event Name */}
        <h3 className="text-lg font-semibold line-clamp-1">
          {event.eventName}
        </h3>

        {/* Meta Info */}
        <div className="space-y-1 flex flex-wrap justify-between text-sm text-muted-foreground">
          <div className="">
            <div className="flex items-center gap-2 pb-2">
              <Clock className="h-4 w-4" />
              <span>{formattedTime}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="line-clamp-1">{event.location}</span>
            </div>
          </div>

          <div className="">
            {event.joiningFee !== undefined && (
              <div className="flex items-center gap-2 pb-2">
                ৳<span>{event.joiningFee}</span>
              </div>
            )}

            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>
                {event.minParticipants} - {event.maxParticipants} participants
              </span>
            </div>
          </div>
        </div>

        {/* Action */}
        <Button asChild className="w-full mt-3">
          <Link href={`/events/${event.id}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventCard;
