import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import db from "./db";
import Github from "next-auth/providers/github";
import type { Session, User } from "next-auth";
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
  console.log("--------------------- Help! shit just happend? ");
  throw new Error("Missing github oauth credentials");
}

console.log(GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET);

declare module "next-auth" {
  interface Session {
    user: User & {
      id: string;
    };
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Github({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
});
