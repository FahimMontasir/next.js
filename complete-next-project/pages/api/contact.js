import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://shakil:shakilkhan@cluster0.1znel.mongodb.net/contactForm?retryWrites=true&w=majority";

const contactHandler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "invalid input." });
      return;
    }

    //store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(uri);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
      res
        .status(201)
        .json({ message: "successfully stored message", data: newMessage });
    } catch (error) {
      client.close();
      res.status(500).json({ message: "storing message failed" });
      return;
    }
    client.close();
  }
};
export default contactHandler;
