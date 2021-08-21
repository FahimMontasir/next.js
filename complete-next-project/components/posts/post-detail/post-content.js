import PostHeader from "./post-header";

const PostContent = ({ post }) => {
  return (
    <article>
      <PostHeader title={post.title} image={post.image} />
      <p>{post.content}</p>
    </article>
  );
};
export default PostContent;
