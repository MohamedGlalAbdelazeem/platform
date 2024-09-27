import { z } from "zod";

   const SignupValidation = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
    email: z.string().email("Invalid email address"),
    password: z.string()
      .min(5, "Password must be at least 5 characters")
      .regex(/[a-z]/, "Password must have at least one lowercase letter")
      .regex(/[A-Z]/, "Password must have at least one uppercase letter")
      .regex(/\W/, "Password must have at least one non-alphanumeric character"), // Non-alphanumeric character rule
    confirmPassword: z.string().min(5, "Confirm password is required"),
  }).superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords must match",
        path: ["confirmPassword"], 
      });
    }
  });

 
  const RestPassValidation = z.object({
  password: z.string().min(6, "Password must be at least 6 characters long"),
  confirmPassword: z.string().min(6, "Confirm Password must be at least 6 characters long"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"], // Error will be for confirmPassword field
});

const signinValidation = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string()
    .min(5, "Password must be at least 5 characters")
});

const profilValidation = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters long'),
  email: z.string().email('Invalid email address'),
  currentPassword: z.string().min(8, 'Password must be at least 8 characters long'),
  newPassword: z
    .string()
    .min(5, "Password must be at least 5 characters")
    .regex(/[a-z]/, "Password must have at least one lowercase letter")
    .regex(/[A-Z]/, "Password must have at least one uppercase letter")
    .regex(/\W/, "Password must have at least one non-alphanumeric character"),
  confirmNewPassword: z
    .string()
    .min(5, "Confirm password is required")
    .refine((val, ctx) => val === ctx.parent.newPassword, {
      message: 'Passwords do not match',
    }),
});

export {RestPassValidation , SignupValidation ,signinValidation ,profilValidation}