import { useEffect } from "react";
import "./Posts.css";
import PostItem from "../PostItem/PostItem";
import { useDispatch, useSelector } from "react-redux";
import { getTimelinePosts } from "../../actions/postAction";
import { useParams } from "react-router";

const Posts = () => {
  const params = useParams;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  if (!posts) return <h1>No Posts Yet</h1>;
  if (params.id) posts = posts.filter((post) => post.userId === params.id);

  return (
    <div className="Posts">
      {loading
        ? "Fetching Posts..."
        : posts.map((post, id) => {
            return <PostItem data={post} key={id} />;
          })}
    </div>
  );
};

export default Posts;
