import {
  getToDoListThunkCreator,
  setCurrentPage,
} from "../../reducers/toDoosReducer";
import ToDoos from "./ToDoos";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  doings: state.toDoosReducer.doings,
  loaded: state.toDoosReducer.loaded,
  pageSize: state.toDoosReducer.pageSize,
  totalDoingsCount: state.toDoosReducer.totalDoingsCount,
  currentPage: state.toDoosReducer.currentPage,
});
const ToDoosContainer = connect(mapStateToProps, {
  getToDoListThunkCreator,
  setCurrentPage,
})(ToDoos);
export default ToDoosContainer;
