"use server";

import { auth0 } from "@/lib/auth0";
import { getUserByAuth0Sub } from "@/lib/data/users";

export async function getCurrentUserAction() {
  const session = await auth0.getSession();

  if (!session?.user?.sub) {
    return null;
  }

  return getUserByAuth0Sub(
    session.user.sub
  );
}

export async function getSessionUserAction() {
  const session = await auth0.getSession();

  return session?.user ?? null;
}