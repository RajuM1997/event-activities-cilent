import {
  Music,
  Laptop,
  Theater,
  ShieldCheck,
  CalendarCheck,
  Users,
  CreditCard,
  Film,
  Mic,
  Code,
} from "lucide-react";

export const categories = [
  {
    title: "Concert",
    slug: "CONCERT",
    icon: Music,
  },
  {
    title: "Live Music",
    slug: "LIVE_MUSIC",
    icon: Music,
  },
  {
    title: "Movie Night",
    slug: "MOVIE_NIGHT",
    icon: Film,
  },
  {
    title: "Stand-up Comedy",
    slug: "STAND_UP_COMEDY",
    icon: Mic,
  },
  {
    title: "Theater",
    slug: "THEATER",
    icon: Theater,
  },
  {
    title: "Hackathon",
    slug: "HACKATHON",
    icon: Code,
  },
  {
    title: "Dev Meetup",
    slug: "DEV_MEETUP",
    icon: Users,
  },
  {
    title: "Tech Talk",
    slug: "TECH_TALK",
    icon: Laptop,
  },
  {
    title: "Coding Workshop",
    slug: "CODING_WORKSHOP",
    icon: Code,
  },
  {
    title: "Networking Event",
    slug: "NETWORKING_EVENT",
    icon: Users,
  },
];

export const features = [
  {
    title: "Easy Event Discovery",
    description: "Find events that match your interests in just a few clicks.",
    icon: CalendarCheck,
  },
  {
    title: "Secure Booking",
    description: "Your payments and data are always safe with us.",
    icon: ShieldCheck,
  },
  {
    title: "For Everyone",
    description: "Perfect for both event attendees and organizers.",
    icon: Users,
  },
  {
    title: "Simple Payments",
    description: "Fast and hassle-free booking experience.",
    icon: CreditCard,
  },
];

export const faqs = [
  {
    question: "Who can become a host?",
    answer:
      "Anyone with a venue or event idea can apply to become a host on JoinUp.",
  },
  {
    question: "Is there any fee to host?",
    answer:
      "No upfront fees. JoinUp takes a small commission per booking to cover platform costs.",
  },
  {
    question: "How do I get paid?",
    answer:
      "Payments are securely transferred to your bank account after each successful booking.",
  },
];

export const team = [
  {
    name: "Rahim Ahmed",
    role: "Founder & CEO",
    image:
      "https://img.freepik.com/free-photo/business-man-curly-cute-handsome-guy-black-suit-giving-handshake_140725-162646.jpg?t=st=1767614973~exp=1767618573~hmac=cc8c248e5e6d2fd484f6d36dd4eaae6ab6696a3d47e8702b483a5ff27bb957ef&w=2000",
  },
  {
    name: "Nusrat Jahan",
    role: "CTO",
    image:
      "https://img.freepik.com/free-photo/business-man-curly-cute-handsome-guy-black-suit-giving-handshake_140725-162646.jpg?t=st=1767614973~exp=1767618573~hmac=cc8c248e5e6d2fd484f6d36dd4eaae6ab6696a3d47e8702b483a5ff27bb957ef&w=2000",
  },
  {
    name: "Tanvir Hasan",
    role: "Event Manager",
    image:
      "https://img.freepik.com/free-photo/business-man-curly-cute-handsome-guy-black-suit-giving-handshake_140725-162646.jpg?t=st=1767614973~exp=1767618573~hmac=cc8c248e5e6d2fd484f6d36dd4eaae6ab6696a3d47e8702b483a5ff27bb957ef&w=2000",
  },
];
