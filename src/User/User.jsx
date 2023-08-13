import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../actions/UserAction";
import { useState } from "react";

const User = ({ person }) => {
  const dispatch = useDispatch();
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );

  const handleFollow = () => {
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));

    setFollowing((prev) => !prev);
  };

  return (
    <div className="Person" key={person.username}>
      <div>
        <img
          src={
            person.profileImage
              ? serverPublic + person.profileImage
              : serverPublic + "defaultProfile.png"
          }
          alt=""
          className="FollowerImg"
        />
        <div className="Name">
          <span>{person.firstName}</span>
          <span>{person.username}</span>
        </div>
      </div>
      <button
        className={
          following
            ? "Button fc-button UnfollowButton"
            : "Button fc-button FollowButton"
        }
        onClick={handleFollow}
      >
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default User;
