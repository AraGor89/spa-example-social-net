const ADD_POST = "ADD_POST";
export const addPostAC = (newPostText) => ({ type: ADD_POST, newPostText });

const initialState = {
  posts: [["it is just a beauty"], ["sadness"], ["fresh air"], ["melancholy"]],
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.newPostText],
        newPost: "",
      };
    default:
      return state;
  }
};

export default postReducer;
