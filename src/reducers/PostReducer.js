const postReducer = (
  state = { posts: null, loading: false, error: false, uploading: false },
  action
) => {
  switch (action.type) {
    case "UPLOAD_START":
      return { ...state, error: false, uploading: true };
    case "UPLOAD_SUCCESSFUL":
      return {
        ...state,
        posts: [action.data, ...state.posts],
        uploading: false,
        error: false,
      };
    case "UPLOAD_FAILED":
      return { ...state, uploading: false, error: true };
    case "RETRIEVING_STARTED":
      return { ...state, loading: true, error: false };
    case "RETRIEVING_SUCCESSFUL":
      return { ...state, posts: action.data, loading: false, error: false };
    case "RETRIEVING_FAILED":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default postReducer;
