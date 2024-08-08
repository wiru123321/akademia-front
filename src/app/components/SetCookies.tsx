"use server";
import { cookies } from "next/headers";

export async function setCookie(value: string) {
  const oneDay = 24 * 60 * 60 * 1000;
  cookies().set("gdpr", value, { expires: Date.now() + oneDay });
}
