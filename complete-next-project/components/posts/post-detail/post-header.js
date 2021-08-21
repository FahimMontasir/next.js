import Image from "next/image";

const PostHeader = ({ title, image }) => {
  return (
    <header className="post-header">
      <h1>{title}</h1>
      <Image src={`/${image}`} alt={title} width={100} height={70} />
    </header>
  );
};
export default PostHeader;
