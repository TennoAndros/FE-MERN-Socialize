import React from "react";
import "./FollowersCard.css";
import { Followers } from "../../data/FollowersData";

const FollowersCard = () => {
  return (
    <div className="FollowersCard">
      <h3>Who is following you</h3>
      {Followers.map((follower, id) => {
        return (
          <div className="Follower">
            <div>
              <img src={follower.img} alt="" className="FollowerImg" />
              <div className="Name">
                <span>{follower.username}</span>
                <span>@{follower.name}</span>
              </div>
            </div>
            <button className="Button fc-button">Follow Back</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
