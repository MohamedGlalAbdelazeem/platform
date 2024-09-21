import { z } from "zod";

export  const signupValidation = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
    email: z.string().email("Invalid email address"),
    password: z.string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[a-z]/, "Password must have at least one lowercase letter")
      .regex(/[A-Z]/, "Password must have at least one uppercase letter")
      .regex(/\W/, "Password must have at least one non-alphanumeric character"), // Non-alphanumeric character rule
    confirmPassword: z.string().min(8, "Confirm password is required"),
  }).superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords must match",
        path: ["confirmPassword"], 
      });
    }
  });