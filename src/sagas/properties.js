import { takeEvery, put, call } from "redux-saga/effects";
import {
  getPropertiesSuccess,
  getPropertiesError
} from "../actions/properties";
import { GET_PROPERTIES_START } from "../constants/actions/properties";
import { getProperties } from "../api";

function* requestTemplates() {
  try {
    const response = yield call(getProperties);
    yield put(getPropertiesSuccess(response.data));
  } catch (error) {
    yield put(getPropertiesError(error.message));
  }
}

export default function* watchSaga() {
  yield takeEvery(GET_PROPERTIES_START, requestTemplates);
}
