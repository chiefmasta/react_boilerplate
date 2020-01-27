import { get, post } from "../methods";

export const getUsersApi = () => {
  return get("http://localhost:8000/api/users");
};

export const addNewUsersApi = data => {
  return post("http://localhost:8000/api/users", data);
};
