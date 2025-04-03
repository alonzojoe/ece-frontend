import { z } from "zod";

export const authSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty({ message: "Email is required" })
    .email({ message: "Please enter a valid email" }),
  password: z
    .string()
    .trim()
    .nonempty({ message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const registrySchema = z
  .object({
    name: z
      .string()
      .trim()
      .nonempty({ message: "Name is required" })
      .min(3, { message: "Name must be at least 3 characters long" }),
    email: z
      .string()
      .trim()
      .nonempty({ message: "Email is required" })
      .email({ message: "Please enter a valid email" }),
    phone: z.string().trim().nonempty({ message: "Phone is required" }),
    gender: z.string().trim().nonempty({ message: "Gender is required" }),
    position_id: z.string().min(1, "Position is required"),
    password: z
      .string()
      .trim()
      .nonempty({ message: "Password is required" })
      .min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z
      .string()
      .trim()
      .nonempty({ message: "Confirm password is required" })
      .min(6, {
        message: "Confirm password must be at least 6 characters long",
      }),
  })
  .refine((val) => val.password === val.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const updateSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters long" }),
  email: z
    .string()
    .trim()
    .nonempty({ message: "Email is required" })
    .email({ message: "Please enter a valid email" }),
  phone: z.string().trim().nonempty({ message: "Phone is required" }),
  gender: z.string().trim().nonempty({ message: "Gender is required" }),
  position_id: z.string().min(1, "Position is required"),
});

export const changePassSchema = z
  .object({
    email: z
      .string()
      .trim()
      .nonempty({ message: "Email is required" })
      .email({ message: "Please enter a valid email" }),
    oldpassword: z
      .string()
      .trim()
      .nonempty({ message: "Password is required" })
      .min(6, { message: "Old password must be at least 6 characters long" }),
    newpassword: z
      .string()
      .trim()
      .nonempty({ message: "New password is required" })
      .min(6, { message: "New password must be at least 6 characters long" }),
    confirmPassword: z
      .string()
      .trim()
      .nonempty({ message: "Confirm new password is required" })
      .min(6, {
        message: "Confirm new password must be at least 6 characters long",
      }),
  })
  .refine((val) => val.newpassword === val.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
