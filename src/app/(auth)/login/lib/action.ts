"use server";

import { userSchema } from "@/lib/validation";
import { ActionResult } from "next/dist/server/app-render/types";
import prisma from "../../../../../lib/prisma";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { signToken } from "@/lib/jwt";

export async function handleLogin(prevState: unknown, formData: FormData): Promise<ActionResult> {
  const validate = userSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validate.success) {
    const errorDesc = validate.error.issues.map((issue) => issue.message);
    return {
      errorTitle: "Error Validation",
      errorDesc,
    };
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      email: validate.data.email,
    },
  });

  if (!existingUser) {
    return {
      errorTitle: "Error",
      errorDesc: ["Email user tidak dapat ditemukan"],
    };
  }

  const validatePassword = await bcrypt.compare(validate.data.password, existingUser.password);

  if (!validatePassword) {
    return {
      errorTitle: "Error",
      errorDesc: ["Password Salah!"],
    };
  }

  const sessionToken = signToken({
    id: existingUser.id,
    email: existingUser.email,
    role: existingUser.role,
  });

  cookies().set("sessionToken", sessionToken);

  if (existingUser.role === "ADMIN") {
    return redirect("/dashboard");
  } else {
    return redirect("/home/products");
  }
}
