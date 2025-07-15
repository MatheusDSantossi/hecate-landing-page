import { z } from "zod";

export const contactSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.email("Must be a valid email"),
    contact: z.string().min(1, "Contact is required"),
    message: z.string().min(1, "Please leave us a message"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
