import { hashPassword } from "../../../helper/auth";
import { connectToDatabase } from "../../../helper/db";
//error handling is removed for simplicity
const signUpHandler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const { email, password } = data;

    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7
    ) {
      res.status(422).json({
        message:
          "invalid input- password should also be at least 7 character long",
      });
      return;
    }

    const client = await connectToDatabase();

    const db = client.db();

    const existingUser = await db.collection("users").findOne({ email: email });

    if (existingUser) {
      res.status(422).json({ message: "user exists already" });
      client.close();
      return;
    }

    const hashedPassword = await hashPassword(password);

    const result = await db
      .collection("users")
      .insertOne({ email: email, password: hashedPassword });
    res.status(201).json({ message: "created user!" });

    client.close();
  }
};
export default signUpHandler;
