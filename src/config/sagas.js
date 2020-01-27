import { all, fork } from "redux-saga/effects";
import * as listUsersSaga from "../features/user/list-user/ressources/saga";
import * as newUserSaga from "../features/user/new-user/ressources/saga";

export default function* rootSaga() {
  yield all(
    [...Object.values(listUsersSaga), ...Object.values(newUserSaga)].map(fork)
  );
}
