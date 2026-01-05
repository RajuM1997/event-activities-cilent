import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahim Ahmed",
    role: "Event Attendee",
    comment:
      "JoinUp makes finding events super easy. I booked my first event in minutes!",
  },
  {
    name: "Nusrat Jahan",
    role: "Event Organizer",
    comment: "Creating and managing events on JoinUp is simple and smooth.",
  },
  {
    name: "Tanvir Hasan",
    role: "Community Member",
    comment: "Great platform to meet new people and explore activities.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">What People Say</h2>
          <p className="mt-2 text-muted-foreground">
            Trusted by our growing community
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name}>
              <CardContent className="p-6">
                <div className="mb-3 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">“{item.comment}”</p>
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
