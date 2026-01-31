import { IEvent } from "./event.interface";
import { IHost, IUserProfile } from "./user.interface";

export interface IReview {
  id: string;
  patientId: string;
  userProfile?: IUserProfile;
  doctorId: string;
  host?: IHost;
  eventId: string;
  event?: IEvent;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

export interface IReviewFormData {
  eventId: string;
  hostId?: string;
  rating: number;
  comment: string;
}
