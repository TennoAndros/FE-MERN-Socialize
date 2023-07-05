import React from "react";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";

import "./LeftArea.css";
import FollowersCard from "../FollowersCard/FollowersCard";

const LeftArea = () => {
  return (
    <div className="LeftAreaProfile">
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default LeftArea;
