import { all } from "redux-saga/effects";
import { countSaga } from "./count";
export default function* rootSaga() {
  yield all([countSaga()]);
}
