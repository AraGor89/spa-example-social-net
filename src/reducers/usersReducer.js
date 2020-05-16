import { usersAPI } from "../api/api";

const SET_USERS = "SET_USERS";
const SET_lOAD = "SETlOAD";
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setLoaded = (loadedOrNot) => ({ type: SET_lOAD, loadedOrNot });

const initialState = {
  users: [],
  loaded: true,
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_lOAD:
      return {
        ...state,
        loaded: action.loadedOrNot,
      };
    default:
      return state;
  }
};
export const getUsersthunkCreator = () => (dispatch) => {
  dispatch(setLoaded(false));
  usersAPI
    .getUsers()
    .then((response) => {
      dispatch(setLoaded(true));
      dispatch(setUsers(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export default usersReducer;
