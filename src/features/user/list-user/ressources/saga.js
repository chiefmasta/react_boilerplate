import { put, takeLatest, call } from "redux-saga/effects";
import { getUsersApi } from "../../../../services/api/userApis";
import { GET_USERS } from "./action-type";
import { actionGenerator } from "../../../../utils/generators";

// ...

// Our worker Saga: will perform the async increment task
function* getList() {
  let response = yield call(getUsersApi);
  yield put({
    type: actionGenerator(GET_USERS, "res"),
    list: response
  });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeLatest(actionGenerator(GET_USERS, "req"), getList);
}
