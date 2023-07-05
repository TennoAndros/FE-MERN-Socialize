import React from "react";
import "./Profile.css";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import PostArea from "../../components/PostArea/PostArea";
import RightArea from "../../components/RightArea//RightArea";

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="ProfileCenter">
        <ProfileCard />
        <PostArea />
      </div>
      <RightArea />
    </div>
  );
};

export default Profile;
