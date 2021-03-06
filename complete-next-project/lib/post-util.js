import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts"); //current working directory

export const getPostFiles = () => fs.readdirSync(postDirectory);

export const getPostData = (fileName) => {
  const filePath = path.join(postDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ""); //removes the file extension

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPost = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPost;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatures);

  return featuredPosts;
};
