import React from "react";
import "./Home.css";
import LeftArea from "../../components/LeftArea/LeftArea";
import PostArea from "../../components/PostArea/PostArea";
import RightArea from "../../components/RightArea/RightArea";

const Home = () => {
  return (
    <div className="Home">
      <LeftArea />
      <PostArea />
      <RightArea />
    </div>
  );
};

export default Home;
