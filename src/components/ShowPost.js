import * as React from "react";

// markup
const ShowPost = ({ post }) => {
  console.log("showpost", post);
  const default_post = {
    titleID: "00",
    title: "Welcome to the Man Blood Bread",
    authorID: "1234567",
    authorName: "BL",
    description: "Go to School By Bus",
    color: "",
  };

  const final_post = { ...default_post, ...post };
  return (
    <div>
      <h1>Title: {final_post.title}</h1>
      <p>Author: {final_post.authorName}</p>
      <p>{final_post.description}</p>
      <hr />
    </div>
  );
};

export default ShowPost;
