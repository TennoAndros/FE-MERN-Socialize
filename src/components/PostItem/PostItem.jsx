import React from "react";
import "./PostItem.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Like from "../../img/like.png";
import NotLike from "../../img/notlike.png";

const PostItem = ({ data }) => {
  return (
    <div className="PostItem">
      <img src={data.img} alt="post" />

      <div className="PostReactions">
        <img src={data.liked ? Like : NotLike} alt="Like or not" />
        <img src={Comment} alt="Comment" />
        <img src={Share} alt="Share" />
      </div>
      <span>{data.likes}Likes</span>
      <div className="Details">
        <span>
          <b>{data.name}:</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default PostItem;
