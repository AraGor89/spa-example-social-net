import { toDoosAPI } from "../api/api";

const SET_DOING = "ADD_DOING";
const SET_lOAD = "SETlOAD";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const setDoingAC = (newDoing) => ({ type: SET_DOING, newDoing });
export const setLoaded = (loadedOrNot) => ({ type: SET_lOAD, loadedOrNot });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

const initialState = {
  doings: [],
  loaded: true,
};
const toDoosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DOING:
      return {
        ...state,
        doings: action.newDoing,
        totalDoingsCount: action.newDoing.length,
      };
    case SET_lOAD:
      return {
        ...state,
        loaded: action.loadedOrNot,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    default:
      return state;
  }
};

export const getToDoListThunkCreator = () => (dispatch) => {
  dispatch(setLoaded(false));
  toDoosAPI
    .getToDoos()
    .then((response) => {
      dispatch(setLoaded(true));
      dispatch(setDoingAC(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export default toDoosReducer;
