import PostGrid from "./post-grid";

const AllPost = ({ posts }) => {
  return (
    <section>
      <h1>All posts</h1>
      <PostGrid posts={posts} />
    </section>
  );
};
export default AllPost;
