import { ADD_NEW_USER } from "./action-type";
import { actionGenerator } from "../../../../utils/generators";

export const addNewUser = user => ({
  type: actionGenerator(ADD_NEW_USER, "req"),
  user
});
