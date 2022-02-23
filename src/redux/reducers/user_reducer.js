import { CLEAR_USER, SET_USER } from "../actions/types";

const initialUserState = {
  currentUser: null,
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default userReducer;
