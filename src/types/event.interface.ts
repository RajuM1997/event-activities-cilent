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
  "OPEN",
  "FULL",
  "CANCELLED",
  "COMPLETED",
}
