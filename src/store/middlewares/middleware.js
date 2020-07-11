import { call, all } from "redux-saga/effects";
import { usersSagas } from "../../saga/usersSaga";
import {worksSagas} from "../../saga/worksSaga";


export default function* middleware() {
  yield all([call(usersSagas),call(worksSagas)]);
}
