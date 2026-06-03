import { z } from "zod";

export const sendContactEmailSchema = z.object({
  name: z
    .string({ error: "Name is required" })
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),

  email: z
    .string({ error: "Email is required" })
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address"
    ),

  message: z
    .string({ error: "Message is required" })
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long (maximum is 1000 characters)"),
});

export type SendContactEmailSchema = z.infer<typeof sendContactEmailSchema>;
