import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authConfig";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/modals";
import { redirect } from "next/dist/server/api-utils";

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({
      username: credentials.username,
      password: credentials.password,
    });
    if (!user) {
      throw new Error("Wrong credentials");
    }
    // const isPasswordCorrect = await bcrypt.hash(
    //   credentials.password,
    //   user.password
    // );
    // if (!isPasswordCorrect) {
    //   throw new Error("Incorrect password");
    // }
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      id: "credentials",

      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          throw new Error("Failed to Login b/c of Credentials");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        (token.username = user.username), (token.img = user.img);
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }

      return session;
    },
  },
});
