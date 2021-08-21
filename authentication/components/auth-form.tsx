import { useState } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/dist/client/router";

const createUser = async (email, password) => {
  const res = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: any = res.json();

  if (!res.ok) {
    throw new Error(data.message || "something went wrong");
  }

  return data;
};

const AuthForm = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogIn) {
      const result = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
      });
      if (!result.error) {
        router.replace("/profile");
      }
    } else {
      try {
        const result = await createUser(email, password);
        console.log(result);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <section>
      <h1>Create</h1>
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
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          {isLogIn ? <button>login</button> : <button>create account</button>}
        </div>
      </form>
      <button onClick={() => setIsLogIn(!isLogIn)}>switch</button>
    </section>
  );
};
export default AuthForm;
