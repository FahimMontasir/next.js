import { useState, useEffect } from "react";
import Notification from "./notification";

const sendContactData = async (contactDetails) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = response.json();

  if (!response.ok) {
    throw new Error(data.message || "something wen wrong");
  }
};

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("pending...");
    try {
      await sendContactData({ email, name, message });
      setStatus("success");
      setEmail("");
      setName("");
      setMessage("");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section>
      <h1>How can I help you?</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Your Message</label>
          <textarea
            rows="5"
            type="text"
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div>
          <button>send message</button>
        </div>
      </form>
      <Notification status={status} />
    </section>
  );
};
export default ContactForm;
