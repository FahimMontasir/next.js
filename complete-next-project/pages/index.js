import Head from "next/head";
import FeaturedPost from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/post-util";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>welcome to my blog</title>
        <meta
          name="description"
          content="I post about programing and development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <FeaturedPost posts={props.posts} />
      </main>
    </div>
  );
}

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
};
