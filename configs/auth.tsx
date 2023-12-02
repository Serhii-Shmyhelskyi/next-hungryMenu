import type { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { users } from "@/components/data/data";

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GO0GLE_CLIENT_ID!,
      clientSecret: process.env.GO0GLE_SECRET!,
    }),

    Credentials({
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        const currentUser = users.find(
          (user) => user.email === credentials.email
        );

        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPass } = currentUser;
          return userWithoutPass as User;
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: "/signin",
  },
};
