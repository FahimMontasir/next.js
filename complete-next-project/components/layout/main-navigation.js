import Link from "next/link";

const MainNavigation = () => {
  return (
    <header className="header">
      <Link href="/" passHref>
        <h1>logo</h1>
      </Link>
      <nav>
        <Link href="/posts" passHref>
          <span className="link">Posts</span>
        </Link>
        <Link href="/contact" passHref>
          <span className="link"> Contact</span>
        </Link>
      </nav>
    </header>
  );
};
export default MainNavigation;
