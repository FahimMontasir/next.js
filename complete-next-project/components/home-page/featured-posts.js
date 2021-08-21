import PostGrid from "../posts/post-grid";

const FeaturedPost = ({ posts }) => {
  return (
    <section>
      <h1>Featured Posts:</h1>
      <PostGrid posts={posts} />
    </section>
  );
};
export default FeaturedPost;
