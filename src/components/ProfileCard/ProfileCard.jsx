import React from "react";
import { useSelector } from "react-redux";
import "./ProfileCard.css";
import { Link } from "react-router-dom";

const ProfileCard = ({ location }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  if (!posts) return null;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img
          src={
            user.coverImage
              ? serverPublic + user.coverImage
              : serverPublic + "defaultCover.jpg"
          }
          alt="cover"
        />
        <img
          src={
            user.profileImage
              ? serverPublic + user.profileImage
              : serverPublic + "defaultProfile.png"
          }
          alt="profile"
        />
      </div>
      <div className="ProfileName">
        <span>
          {user.firstName} {user.lastName}
        </span>
        <span>{user.worksAt ? user.worksAt : "Add details"}</span>
      </div>
      <div className="FollowStatus">
        <hr />
        <div>
          <div className="Follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          <div className="VerticalLine"></div>
          <div className="Follow">
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>
          {location === "profilePage" && (
            <>
              <div className="VerticalLine"></div>
              <div className="Follow">
                <span>
                  {posts.filter((post) => post.userId === user._id).length}
                </span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === "profilePage" ? (
        ""
      ) : (
        <span>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/profile/${user._id}`}
          >
            {" "}
            My Profile{" "}
          </Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
