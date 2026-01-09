import z from "zod";

export const createEventValidationZodSchema = z.object({
  eventName: z.string().min(1, { message: "Event name is required" }),
  date: z.string().min(1, { message: "Date is required" }),
  interests: z.string().min(1, { message: "Interests is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  maxParticipants: z
    .string()
    .min(1, { message: "Max participants is required" }),
  minParticipants: z
    .string()
    .min(1, { message: "Min participants is required" }),
  joiningFee: z.string().min(1, { message: "Joining fee is required" }),
  category: z.string().min(1, { message: "Min participants is required" }),
  description: z.string().min(1, { message: "Description is required" }),
});
