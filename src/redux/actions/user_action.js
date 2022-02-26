import { CLEAR_USER, SET_USER } from "./types";

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const claerUser = () => {
  return {
    type: CLEAR_USER,
  };
};
