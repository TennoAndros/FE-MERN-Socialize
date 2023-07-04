import React from "react";
import "./Home.css";
import ProfileArea from "../../components/ProfileArea/ProfileArea";
import PostArea from "../../components/PostArea/PostArea";

const Home = () => {
  return (
    <div className="Home">
      <ProfileArea />
      <PostArea />
      <div className="rightSide">RightSIde</div>
    </div>
  );
};

export default Home;
