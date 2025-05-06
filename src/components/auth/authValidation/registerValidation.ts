import { z } from "zod";

export const registrationSchema = z.object({
    name: z
      .string({ required_error: "Name is required" })
      .min(2, "Name must be between 2 and 50 characters")
      .max(50, "Name must be between 2 and 50 characters"),
    email: z
      .string({ required_error: "Email is required" })
      .email("Invalid email address"),
    // address: z.string(),
    // phone: z.string().regex(/^\d{10,15}$/, "Phone must be a valid number"),
    bio: z.string().max(500, "Bio cannot exceed 500 characters").optional(),
    role: z.enum(["Student", "Tutor"]),
    profilePicture: z.string().url().optional(),
    subjects: z.string().optional(),
    gradeLevel: z.string().optional(),
    availability: z
      .object({
        from: z.date().optional(),
        to: z.date().optional(),
      })
      .optional(),
    price: z.number().optional(),
    password: z
      .string({ required_error: "Password is required" })
      .min(8, "Password must be at least 8 characters"),
    passwordConfirm: z
      .string({ required_error: "Password Confirmation is required" })
      .min(1),
  });