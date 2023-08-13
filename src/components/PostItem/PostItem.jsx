import { useState } from "react";
import { useSelector } from "react-redux";
import "./PostItem.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Like from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { likePost } from "../../api/PostRequest";

const PostItem = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => --prev) : setLikes((prev) => ++prev);
  };

  return (
    <div className="PostItem">
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt="post"
      />

      <div className="PostReactions">
        <img
          src={liked ? Like : NotLike}
          alt="Like or not"
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        <img src={Comment} alt="Comment" />
        <img src={Share} alt="Share" />
      </div>
      <span style={{ color: "var(--gray", fontSize: "14px" }}>
        {likes} Likes
      </span>
      <div className="Details">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default PostItem;
