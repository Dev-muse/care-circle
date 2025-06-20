import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "name must be at least 2 characters.")
    .max(50, "name must be max 50 characters."),
  email: z.string().email("Invalid email address format"),
  phone: z
    .string()
    .refine(
      (phone) => /^\+?[1-9]\d{1,14}$/.test(phone),
      "Invalid phone number"
    ),
});
 