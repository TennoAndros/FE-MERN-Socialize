import * as PostApi from "../api/PostRequest";

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETRIEVING_START" });
  try {
    const { data } = await PostApi.getTimelinePosts(id);
    dispatch({ type: "RETRIEVING_SUCCESSFUL", data });
  } catch (error) {
    dispatch({ type: "RETRIEVING_FAILED" });
    console.log(error);
  }
};
