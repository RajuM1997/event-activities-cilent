"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Home, RefreshCcw } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      {/* Background blobs */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-destructive/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      {/* Card */}
      <Card className="relative z-10 w-full max-w-xl border-destructive/30 bg-background/70 backdrop-blur-xl shadow-xl">
        <CardContent className="p-10">
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>

            {/* Text */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">
                Something went wrong
              </h1>
              <p className="text-muted-foreground">
                An unexpected error occurred. Please try again or return home.
              </p>
            </div>

            {/* Dev Error Info */}
            {process.env.NODE_ENV === "development" && (
              <div className="w-full rounded-lg border bg-muted p-4 text-left">
                <p className="text-sm font-mono text-muted-foreground break-all">
                  {error.message}
                </p>
                {error.digest && (
                  <p className="mt-2 text-xs font-mono text-muted-foreground">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            )}

            {/* Actions */}
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
              <Button onClick={reset} size="lg" className="gap-2">
                <RefreshCcw className="h-4 w-4" />
                Try Again
              </Button>

              <Button variant="outline" size="lg" asChild className="gap-2">
                <Link href="/">
                  <Home className="h-4 w-4" />
                  Home
                </Link>
              </Button>
            </div>

            {/* Footer note */}
            <p className="text-sm text-muted-foreground">
              If the issue continues, please contact support.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
