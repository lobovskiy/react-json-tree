import { put, takeEvery, call } from 'redux-saga/effects';
import { startLoading, addFamilyTable, FETCH_FAMILY_TABLE, addFamilyTree, FETCH_FAMILY_TREE, addFamilyRoots, FETCH_FAMILY_ROOTS } from '../store/reducer';
import { getTable, getTree, getRoots } from '../api';

function* fetchFamilyTableWorker() {
  yield put(startLoading());
  yield call(() => new Promise(res => setTimeout(res, 1000)));
  const data = yield call(() => getTable());
  yield put(addFamilyTable(data));
}

function* fetchFamilyTreeWorker() {
  yield put(startLoading());
  yield call(() => new Promise(res => setTimeout(res, 1000)));
  const data = yield call(() => getTree());
  yield put(addFamilyTree(data));
}

function* fetchFamilyRootsWorker() {
  yield put(startLoading());
  yield call(() => new Promise(res => setTimeout(res, 1000)));
  const data = yield call(() => getRoots());
  yield put(addFamilyRoots(data));
}

export function* familyWatcher() {
  yield takeEvery(FETCH_FAMILY_TABLE, fetchFamilyTableWorker);
  yield takeEvery(FETCH_FAMILY_TREE, fetchFamilyTreeWorker);
  yield takeEvery(FETCH_FAMILY_ROOTS, fetchFamilyRootsWorker);
}
