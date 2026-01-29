import { Card, CardContent } from "@/components/ui/card";
import { Users, Globe, Star } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-linear-to-b from-green-50/50 to-white/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900">
            About JoinUp
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            A platform built to connect people through events and activities.
            Discover, join, or create events with ease!
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* What is JoinUp */}
          <Card className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-2xl transition p-6 rounded-2xl">
            <CardContent className="flex flex-col items-start gap-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500/20 text-green-700">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                What is JoinUp?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                JoinUp is an event and activities platform designed to help
                people discover, join, and create events with ease. From music
                and sports to tech and community meetups, JoinUp brings people
                together in one simple and reliable platform.
              </p>
            </CardContent>
          </Card>

          {/* About the Creator */}
          <Card className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-2xl transition p-6 rounded-2xl">
            <CardContent className="flex flex-col items-start gap-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500/20 text-green-700">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                About the Creator
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Hi, I’m the creator of JoinUp 👋 I built this platform to solve
                the common problem of finding and managing events easily. As a
                developer, my goal is to create simple, user-friendly solutions
                that help people connect and share meaningful experiences.
              </p>
            </CardContent>
          </Card>

          {/* Why JoinUp */}
          <Card className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-2xl transition p-6 rounded-2xl">
            <CardContent className="flex flex-col items-start gap-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500/20 text-green-700">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Why JoinUp?</h3>
              <p className="text-gray-700 leading-relaxed">
                JoinUp makes discovering events simple and fun. Whether you want
                to meet new people, learn new skills, or enjoy your favorite
                hobbies, JoinUp gives you a seamless experience to engage with
                like-minded people in your area.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
