import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { verifyPassword } from "../../../helper/auth";
import { connectToDatabase } from "../../../helper/db";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials: any) {
        const client = await connectToDatabase();

        const userCollection = client.db().collection("users");

        const user = await userCollection.findOne({ email: credentials.email });

        if (!user) {
          client.close();
          throw new Error("no user found");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("could not log in");
        }
        client.close();

        return { email: user.email };
      },
    }),
  ],
});
