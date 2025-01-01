import { z } from "zod";

const userSchema = z.object({
  email: z.string({ required_error: "Email tidak boleh kosong" }).email({ message: "Email tidak valid" }),
  password: z.string({ required_error: "Password tidak boleh kosong" }).min(5, { message: "Password tidak Valid" }),
});

const registerSchema = z.object({
  email: z.string({ required_error: "Email tidak boleh kosong" }).email({ message: "Email Tidak valid" }),
  name: z.string({ required_error: "Nama tidak boleh kosong" }).min(5, { message: "Minimal 5 Kata" }),
  password: z.string({ required_error: "Password tidak boleh kosong" }).min(6, { message: "Minimal 6 Karakter" }),
});

const productSchema = z.object({});

export { userSchema, productSchema, registerSchema };
