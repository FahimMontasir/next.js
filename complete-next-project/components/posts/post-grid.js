import PostItem from "./post-item";

const PostGrid = ({ posts }) => {
  return (
    <ul style={{ display: "flex" }}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};
export default PostGrid;
