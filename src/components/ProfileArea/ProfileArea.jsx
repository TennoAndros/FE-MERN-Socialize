import React from "react";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";

import "./ProfileArea.css";
import FollowersCard from "../FollowersCard/FollowersCard";

const ProfileArea = () => {
  return (
    <div className="ProfileArea">
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileArea;
