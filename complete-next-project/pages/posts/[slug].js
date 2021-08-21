import Head from "next/head";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../lib/post-util";

const Post = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.description} />
      </Head>
      <PostContent post={props.post} />
    </>
  );
};
export default Post;

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600, //10minutes
  };
};

export const getStaticPaths = () => {
  const postFileNames = getPostFiles();

  const slugs = postFileNames.map((filename) => filename.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};
