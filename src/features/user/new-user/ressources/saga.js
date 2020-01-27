import { put, takeLatest, call } from "redux-saga/effects";
import { addNewUsersApi } from "../../../../services/api/userApis";
import { GET_USERS } from "../../../../features/user/list-user/ressources/action-type";
import { ADD_NEW_USER } from "./action-type";
import { actionGenerator } from "../../../../utils/generators";

// ...

// Our worker Saga: will perform the async increment task
function* addNewUser(values) {
  try {
    let data = {
      first_name: "Mouad",
      last_name: "Ech-chaaba",
      role_id: 1
    };
    data["email"] = values.email;

    yield put({ type: actionGenerator(GET_USERS, "req") });
  } catch (e) {
    console.log(e);
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeLatest(actionGenerator(ADD_NEW_USER, "req"), addNewUser);
}
