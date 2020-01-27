import { actionGenerator } from "../../../../utils/generators";
import { GET_USERS } from "./action-type";
import { ADD_NEW_USER } from "../../new-user/ressources/action-type";

const initalState = {
  list: [],
  isLoading: false
};

export default (state = initalState, action) => {
  switch (action.type) {
    case actionGenerator(GET_USERS, "req"):
      return { ...state, isLoading: true };
    case actionGenerator(GET_USERS, "res"):
      return { ...state, isLoading: false, list: action.list };
    case actionGenerator(GET_USERS, "fail"):
      return { ...state, isLoading: false };
    case ADD_NEW_USER:
      return { ...state, list: [...state.list, action.user] };
    default:
      return state;
  }
};
