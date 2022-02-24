import { put, takeEvery, call } from 'redux-saga/effects';
import { addFamily, startLoading, FETCH_FAMILY } from '../store/reducer';
import { getTable } from '../api';

function* fetchFamilyWorker() {
  yield put(startLoading());
  yield call(() => new Promise(res => setTimeout(res, 2000)));
  const data = yield call(() => getTable());
  yield put(addFamily(data));
}

export function* familyWatcher() {
  yield takeEvery(FETCH_FAMILY, fetchFamilyWorker);
}

