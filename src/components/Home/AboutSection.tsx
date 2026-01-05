import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section className="py-16 bg-muted/40">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">About JoinUp</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            A platform built to connect people through events and activities
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* About JoinUp */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">What is JoinUp?</h3>
              <p className="text-muted-foreground leading-relaxed">
                JoinUp is an event and activities platform designed to help
                people discover, join, and create events with ease. From music
                and sports to tech and community meetups, JoinUp brings people
                together in one simple and reliable platform.
              </p>
            </CardContent>
          </Card>

          {/* About Me */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">About the Creator</h3>
              <p className="text-muted-foreground leading-relaxed">
                Hi, I’m the creator of JoinUp 👋 I built this platform to solve
                the common problem of finding and managing events easily. As a
                developer, my goal is to create simple, user-friendly solutions
                that help people connect and share meaningful experiences.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
