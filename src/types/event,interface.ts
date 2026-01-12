export interface IEvent {
  eventName: string;
  date: string;
  description: string;
  location: string;
  minParticipants: string;
  maxParticipants: string;
  category: string;
  joiningFee: string;
}
type EventStatus = {
  OPEN: "OPEN";
  CLOGED: "";
};
