import Image from "next/image";
import Link from "next/link";

const PostItem = ({ post }) => {
  const imagePath = `/${post.image}`;
  const linkPath = `/posts/${post.slug}`;
  return (
    <Link href={linkPath} passHref>
      <div style={{ margin: 10, cursor: "pointer" }}>
        <h1>{post.title}</h1>
        <Image alt={post.alt} src={imagePath} width={200} height={200} />
        <p>{post.description}</p>
      </div>
    </Link>
  );
};
export default PostItem;
