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
  eventName?: string;
  date?: string;
}

export enum BookingStatus {
  BOOKED = "BOOKED",
  CANCELLED = "CANCELLED",
}
