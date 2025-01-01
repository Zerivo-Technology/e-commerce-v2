"use server";
import { ActionResult } from "../components/FormRegister";
import bcrypt from "bcrypt";
import prisma from "../../../../../lib/prisma";
import { registerSchema } from "@/lib/validation";
import { redirect } from "next/navigation";

export async function registerUser(prevState: unknown, formData: FormData): Promise<ActionResult> {
  const validate = registerSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    password: formData.get("password"),
  });

  if (!validate.success) {
    const errorDesc = validate.error.issues.map((issue) => issue.message);

    return {
      errorTitle: "Error Validation",
      errorDesc,
    };
  }

  const emailChecking = await prisma.user.findFirst({
    where: {
      email: validate.data.email,
    },
  });

  if (emailChecking) {
    return {
      errorTitle: "Error validation",
      errorDesc: ["Email sudah tersedia"],
    };
  }

  const hashPassword = await bcrypt.hashSync(validate.data.password, 10);

  await prisma.user.create({
    data: {
      email: validate.data.email,
      name: validate.data.name,
      password: hashPassword,
      role: "CUSTOMER",
    },
  });

  return redirect("/login");
}
