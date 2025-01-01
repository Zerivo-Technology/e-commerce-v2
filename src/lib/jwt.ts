import { sign, verify } from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET;

export function signToken(payload: string | object): string {
  return sign(payload, SECRET_KEY);
}

export async function verifyToken(token: string): Promise<void> {
  try {
    verify(token, SECRET_KEY);
  } catch (error) {
    console.log(error);
    throw new Error("Invalid or expired token");
  }
}
