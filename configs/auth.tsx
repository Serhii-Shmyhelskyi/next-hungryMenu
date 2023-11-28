import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GO0GLE_CLIENT_ID!,
      clientSecret: process.env.GO0GLE_SECRET!,
    }),
  ],
};
