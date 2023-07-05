import React from "react";
import Cover from "../../img/cover.jpg";
import ProfileImage from "../../img/profileAndros.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilePage = true;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={ProfileImage} alt="" />
      </div>
      <div className="ProfileName">
        <span>Tenno Andros</span>
        <span>Junior Developer/Engineer</span>
      </div>
      <div className="FollowStatus">
        <hr />
        <div>
          <div className="Follow">
            <span>1m</span>
            <span>Followers</span>
          </div>
          <div className="VerticalLine"></div>
          <div className="Follow">
            <span>1.1m</span>
            <span>Following</span>
          </div>
          {ProfilePage && (
            <>
              <div className="VerticalLine"></div>
              <div className="Follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
