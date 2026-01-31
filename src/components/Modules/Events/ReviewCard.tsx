import { Star } from "lucide-react";

interface ReviewCardProps {
  review: {
    id: string;
    userName: string;
    rating: number;
    comment: string;
    createdAt: string;
  };
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="border rounded-lg p-4 space-y-2">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">{review.userName}</h4>
        <span className="text-xs text-muted-foreground">
          {new Date(review.createdAt).toLocaleDateString()}
        </span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= review.rating
                ? "fill-yellow-500 text-yellow-500"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-2 text-sm">{review.rating}/5</span>
      </div>

      {/* Comment */}
      <p className="text-sm text-muted-foreground">{review.comment}</p>
    </div>
  );
};

export default ReviewCard;
