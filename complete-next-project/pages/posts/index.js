import Head from "next/head";
import AllPost from "../../components/posts/all-post";
import { getAllPosts } from "../../lib/post-util";

const Posts = (props) => {
  return (
    <>
      <Head>
        <title>all posts</title>
        <meta
          name="description"
          content="a list of all programing-related tutorials and posts"
        />
      </Head>
      <AllPost posts={props.posts} />
    </>
  );
};
export default Posts;

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};
