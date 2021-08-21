import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";

const Comment = (props) => {
  const email2InputRef = useRef();
  const nameInputRef = useRef();
  const textInputRef = useRef();
  const eventId = "123";
  const [show, setShow] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("/api/comments/" + eventId)
      .then((res) => res.json())
      .then((data) => setComments(data.comments));
  }, []);

  const commentsHandler = (e) => {
    e.preventDefault();

    const commentData = {
      email: email2InputRef.current.value,
      name: nameInputRef.current.value,
      text: textInputRef.current.value,
    };

    fetch("/api/comments/" + eventId, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={commentsHandler}>
        <input
          ref={email2InputRef}
          name="email"
          type="email"
          id="email"
          placeholder="enter your email"
        />
        <input
          ref={nameInputRef}
          name="name"
          type="text"
          id="name"
          placeholder="enter your name"
        />
        <input
          ref={textInputRef}
          name="text"
          type="text"
          id="text"
          placeholder="enter your text"
        />
        <button type="submit">submit</button>
      </form>
      <button onClick={() => setShow((s) => !s)}>show comments</button>
      {show &&
        comments.map((com) => (
          <h1 key={com._id}>
            name:{com.name} text:{com.text}
          </h1>
        ))}
    </div>
  );
};
export default Comment;
