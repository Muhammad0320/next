"use server";

import { signIn, signOut } from "@/auth";

export const signin = () => {
  return signIn("github");
};

export const signout = () => {
  return signOut();
};
