import { connect } from "react-redux";
import Notes from "./Notes";
import { addPostAC } from "../../reducers/postsReducer";

const mapStateToProps = (state) => ({
  posts: state.postsReducer.posts,
  newPost: state.postsReducer.newPost,
});
const mapDispatchToProps = (dispatch) => ({
  onAddPost(newPost) {
    dispatch(addPostAC(newPost));
  },
});
const NotesContainer = connect(mapStateToProps, mapDispatchToProps)(Notes);
export default NotesContainer;
