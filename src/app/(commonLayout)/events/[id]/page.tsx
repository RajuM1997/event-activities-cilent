import Image from "next/image";
import { getEventById } from "@/services/event/event.service";
import JoinEventButton from "@/components/Modules/Events/JoinEventButton";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { IEvent } from "@/types/event.interface";
import EventReviews from "@/components/Modules/Events/EventReview";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:8800/api/v1/event?limit=5&page=1");
  const result = await res.json();
  const events = result?.data ?? [];

  return events.map((event: IEvent) => ({
    id: String(event.id),
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { data } = await getEventById(id);

  return {
    title: data?.eventName,
    description: data?.description,
  };
};

const EventDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const userInfo = await getUserInfo();
  const { data: event } = await getEventById(id);

  const eventDate = new Date(event?.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  console.log(event);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Event Image */}
        <div className="relative h-80 md:h-105 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={event.image}
            alt={event.eventName}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title */}
            <div>
              <span className="inline-block mb-3 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                {event.category}
              </span>

              <h1 className="text-3xl md:text-4xl font-bold">
                {event.eventName}
              </h1>

              <p className="mt-2 text-muted-foreground">
                📍 {event.location} • 📅 {eventDate}
              </p>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold mb-2">About this event</h2>
              <p className="text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <InfoCard title="Joining Fee" value={`৳ ${event.joiningFee}`} />
              <InfoCard title="Status" value={event.status} />
              <InfoCard title="Joined" value={event.joinCount} />
              <InfoCard
                title="Capacity"
                value={`${event.minParticipants} - ${event.maxParticipants}`}
              />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Host */}
            <div className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Hosted by</h3>

              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center text-xl font-bold">
                  {event.host?.name?.charAt(0)}
                </div>

                <div>
                  <p className="font-medium">{event.host?.name}</p>
                  <p className="text-sm text-muted-foreground">
                    ⭐ {event.host?.averageRating || 0}
                  </p>
                </div>
              </div>

              <div className="mt-4 text-sm text-muted-foreground space-y-1">
                <p>📍 {event.host?.address}</p>
                <p>📞 {event.host?.phoneNumber}</p>
                <p>📧 {event.host?.email}</p>
              </div>
            </div>

            {/* Sticky Join Button */}
            <div className="sticky top-24">
              <JoinEventButton eventId={event.id} userInfo={userInfo} />
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-24 border-t pt-16">
          <EventReviews
            reviews={event.review || []}
            eventId={event.id}
            eventName={event.eventName}
            userId={userInfo?.userProfile?.id}
            booking={event.booking}
          />
        </div>
      </div>
    </section>
  );
};

export default EventDetailsPage;

/* ---------- Reusable Info Card ---------- */
const InfoCard = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => (
  <div className="rounded-xl border p-4 text-center">
    <p className="text-sm text-muted-foreground">{title}</p>
    <p className="mt-1 text-lg font-semibold">{value}</p>
  </div>
);
