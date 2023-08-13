import * as PostApi from "../api/PostRequest";

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETRIEVING_STARTED" });
  try {
    const { data } = await PostApi.getTimelinePosts(id);
    dispatch({ type: "RETRIEVING_SUCCESSFUL", data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETRIEVING_FAILED" });
  }
};
