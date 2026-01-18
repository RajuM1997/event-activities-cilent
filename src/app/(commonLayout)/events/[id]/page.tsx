import Image from "next/image";
import { getEventById } from "@/services/event/event.service";
import JoinEventButton from "@/components/Modules/Events/JoinEventButton";

const EventDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const { data: event } = await getEventById(id);

  const eventDate = new Date(event.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Event Image */}
        <div className="relative w-full h-75 md:h-105 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={event.image}
            alt={event.eventName}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div>
              <span className="inline-block mb-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                {event.category}
              </span>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {event.eventName}
              </h1>

              <p className="mt-2 text-gray-600">
                📍 {event.location} • 📅 {eventDate}
              </p>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold mb-2">About this event</h2>
              <p className="text-gray-700 leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Event Info */}
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
            {/* Host Card */}
            <div className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Hosted by</h3>

              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                  {event?.host?.name.charAt(0)}
                </div>

                <div>
                  <p className="font-medium">{event?.host?.name}</p>
                  <p className="text-sm text-gray-500">
                    ⭐ {event?.host?.averageRating}
                  </p>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600 space-y-1">
                <p>📍 {event?.host?.address}</p>
                <p>📞 {event?.host?.phoneNumber}</p>
                <p>📧 {event?.host?.email}</p>
              </div>
            </div>

            {/* Join Button */}
            <JoinEventButton eventId={event.id} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsPage;

/* Reusable Info Card */
const InfoCard = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => {
  return (
    <div className="rounded-xl border p-4 text-center">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="mt-1 text-lg font-semibold text-gray-900">{value}</p>
    </div>
  );
};
