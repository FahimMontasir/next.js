import { signOut, useSession } from "next-auth/client";
import Link from "next/link";

const Header = () => {
  const [session, loading] = useSession();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <section>
      <h1>logo</h1>
      <Link href="/">home</Link> <br />
      {!session && !loading && <Link href="/auth">login</Link>}
      <br />
      {session && <Link href="/profile">profile</Link>}
      <br />
      {session && <button onClick={handleSignOut}>logout</button>}
    </section>
  );
};
export default Header;
