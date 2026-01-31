export interface IEvent {
  id?: string;
  eventName: string;
  date: string;
  description: string;
  location: string;
  minParticipants: string;
  maxParticipants: string;
  category: string;
  joiningFee: string;
  status: EventStatus;
  image: string;
  joinCount: number;
}
export enum EventStatus {
  OPEN = "OPEN",
  FULL = "FULL",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
}

export interface IBooking {
  id: string;
  bookingStatus: BookingStatus;
  createdAt: string;
  eventId: string;
  status: EventStatus;
  transactionId: string;
  updatedAt: string;
  amount: number;
  event: IBookingEvent;
  userId: string;
}

export enum BookingStatus {
  BOOKED = "BOOKED",
  CANCELLED = "CANCELLED",
}
export interface IBookingEvent {
  eventName: string;
  date: string;
  category: string;
}
