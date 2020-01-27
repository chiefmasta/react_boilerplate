import { GET_USERS } from "./action-type";
import { actionGenerator } from "../../../../utils/generators";

export const getListUsers = () => ({ type: actionGenerator(GET_USERS, "req") });
