import {
  connectDatabase,
  getAllDocuments,
  insertDocument,
} from "../../../helper/dbHelper";

const commentsHandler = async (req, res) => {
  const eventId = req.query.eventId;
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "database connection failed" });
    return;
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "invalid input." });
      client.close();
      return;
    }

    const newComment = {
      eventId,
      email,
      name,
      text,
    };

    try {
      await insertDocument(client, "comments", newComment);
      res.status(201).json({ message: "added comment", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "data adding failed" });
    }
  }

  if (req.method === "GET") {
    try {
      const document = await getAllDocuments(client, "comments", { _id: -1 });
      res.status(200).json({ comments: document });
    } catch (error) {
      res.status(500).json({ message: "getting comments failed" });
    }
  }
  client.close();
};

export default commentsHandler;
