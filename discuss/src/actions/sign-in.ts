import { signIn } from "@/auth";

export const signin = () => {
  return signIn("github");
};
