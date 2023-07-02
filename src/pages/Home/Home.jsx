import React from "react";
import "./Home.css";
import Profile from "../../components/Profile/Profile";

const Home = () => {
  return (
    <div className="Home">
      <Profile />
      <div className="posteSide">Posts</div>
      <div className="rightSide">RightSIde</div>
    </div>
  );
};

export default Home;
