/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import ReviewDialog from "./ReviewDialog";
import { IBooking } from "@/types/event.interface";

interface EventReviewsProps {
  reviews: any[];
  eventId: string;
  eventName: string;
  userId: string;
  booking: IBooking[];
}

const EventReviews = ({
  reviews,
  eventId,
  eventName,
  userId,
  booking,
}: EventReviewsProps) => {
  const [open, setOpen] = useState(false);
  const [isAbleToGiveReview, setIsAbleToGiveReview] = useState(false);
  useEffect(() => {
    if (userId && booking) {
      const isAbleReview = booking.find(
        (bookingEvent) =>
          bookingEvent.userId === userId &&
          bookingEvent.bookingStatus === "BOOKED",
      );
      if (isAbleReview) {
        setIsAbleToGiveReview(true);
      }
    }
  }, [booking, userId]);

  console.log({ isAbleToGiveReview });

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Reviews ({reviews.length})</h3>

        <Button onClick={() => setOpen(true)}>Add Review</Button>
      </div>

      {/* Review List */}
      {reviews.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No reviews yet. Be the first to review this event!
        </p>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}

      {/* Review Dialog */}
      <ReviewDialog
        isOpen={open}
        onClose={() => setOpen(false)}
        eventId={eventId}
        eventName={eventName}
        isAbleToGiveReview={isAbleToGiveReview}
      />
    </section>
  );
};

export default EventReviews;
