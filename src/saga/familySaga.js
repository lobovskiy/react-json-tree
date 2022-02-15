import { put, takeEvery, call } from 'redux-saga/effects';
import { addFamily, startLoading, FETCH_FAMILY } from '../store/reducer';

const fetchFamilyFromApi = () => fetch('http://localhost:3004/family');

function* fetchFamilyWorker() {
  yield put(startLoading());
  yield call(() => new Promise(res => setTimeout(res, 2000)));
  const data = yield call(fetchFamilyFromApi);
  const json = yield call(() => data.json());
  yield put(addFamily(json));
}

export function* familyWatcher() {
  yield takeEvery(FETCH_FAMILY, fetchFamilyWorker);
}