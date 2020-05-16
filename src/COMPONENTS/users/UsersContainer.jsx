import Users from "./Users";
import { connect } from "react-redux";
import { getUsersthunkCreator } from "../../reducers/usersReducer";

const mapStateToProps = (state) => ({
  users: state.usersReducer.users,
  loaded: state.usersReducer.loaded,
});
const UsersContainer = connect(mapStateToProps, { getUsersthunkCreator })(
  Users
);
export default UsersContainer;
