import { takeEvery, put, call, delay } from "redux-saga/effects";
import { requestStart, requestEnd } from "../actions/global";
import { getTemplatesSuccess, getTemplatesError } from "../actions/templates";
import { getPropertiesStart } from "../actions/properties";
import { GET_TEMPLATES_START } from "../constants/actions/templates";
import { getTemplates } from "../api";

function* requestTemplates() {
  try {
    yield put(requestStart());
    const response = yield call(getTemplates);
    yield put(getTemplatesSuccess(response.data));
    yield put(getPropertiesStart());
  } catch (error) {
    yield put(getTemplatesError(error.message));
  } finally {
    yield delay(400);
    yield put(requestEnd());
  }
}

export default function* watchSaga() {
  yield takeEvery(GET_TEMPLATES_START, requestTemplates);
}
