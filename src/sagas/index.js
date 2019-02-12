import { all, fork } from "redux-saga/effects";

import globalSaga from "./global";
import templatesSaga from "./templates";
import propertiesSaga from "./properties";

const sagas = [globalSaga, templatesSaga, propertiesSaga];

export default function* root() {
  yield all(sagas.map(saga => fork(saga)));
}
