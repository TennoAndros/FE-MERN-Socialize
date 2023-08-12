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
        posts: state.posts ? [action.data, ...state.posts] : [action.data],
        uploading: false,
        error: false,
      };
    case "UPLOAD_FAILED":
      return { ...state, uploading: false, error: true };

    default:
      return state;
  }
};

export default postReducer;
