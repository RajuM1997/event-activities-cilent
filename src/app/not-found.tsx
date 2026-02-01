"use client";

import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      {/* Background blobs */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-destructive/10 blur-3xl" />

      {/* Card */}
      <div className="relative z-10 max-w-lg w-full rounded-2xl border bg-background/70 backdrop-blur-xl p-10 text-center shadow-xl">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10">
          <AlertCircle className="h-7 w-7 text-destructive" />
        </div>

        {/* 404 */}
        <h1 className="mb-2 text-7xl font-extrabold tracking-tight bg-linear-to-r from-primary to-destructive bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-3">Page Not Found</h2>

        {/* Description */}
        <p className="text-muted-foreground mb-8">
          The page you’re trying to reach doesn’t exist or may have been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={() => router.back()}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>

          <Button size="lg" asChild className="gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
