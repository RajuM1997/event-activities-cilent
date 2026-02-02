import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function PublicFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold">JoinUp</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              JoinUp helps you discover, join, and create amazing events and
              activities. Bringing people together, one event at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/events" className="hover:text-primary">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/create-event" className="hover:text-primary">
                  Create Event
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-3 font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com" aria-label="Facebook">
                <Facebook className="h-5 w-5 hover:text-primary" />
              </Link>
              <Link href="https://x.com/?lang=en" aria-label="Twitter">
                <Twitter className="h-5 w-5 hover:text-primary" />
              </Link>
              <Link href="https://www.instagram.com/" aria-label="Instagram">
                <Instagram className="h-5 w-5 hover:text-primary" />
              </Link>
              <Link href="https://www.linkedin.com/login" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 hover:text-primary" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} JoinUp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
