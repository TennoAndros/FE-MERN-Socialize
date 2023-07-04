import React from "react";
import "./PostArea.css";
import PostShare from "../PostShare/PostShare";
import Posts from "../Posts/Posts";

const PostArea = () => {
  return (
    <div className="PostArea">
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostArea;
