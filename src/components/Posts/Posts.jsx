import React from "react";
import "./Posts.css";
import { PostsData } from "../../data/PostsData";
import PostItem from "../PostItem/PostItem";

const Posts = () => {
  return (
    <div className="Posts">
      {PostsData.map((post, id) => {
        return <PostItem data={post} key={id} />;
      })}
    </div>
  );
};

export default Posts;
