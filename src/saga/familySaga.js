import { put, takeEvery, call, delay } from 'redux-saga/effects';
import {
  startLoading, startBranchLoading,
  addFamilyTable, FETCH_FAMILY_TABLE,
  addFamilyTree, FETCH_FAMILY_TREE,
  addFamilyRoots, FETCH_FAMILY_ROOTS,
  addFamilyChildren, FETCH_FAMILY_CHILDREN } from '../store/reducer';
import { getTable, getTree, getRoots, getChildren } from '../api';

function* fetchFamilyTableWorker() {
  yield put(startLoading());
  yield delay(1000);
  const data = yield call(() => getTable());
  yield put(addFamilyTable(data));
}

function* fetchFamilyTreeWorker() {
  yield put(startLoading());
  yield delay(1000);
  const data = yield call(() => getTree());
  yield put(addFamilyTree(data));
}

function* fetchFamilyRootsWorker() {
  yield put(startLoading());
  yield delay(1000);
  const data = yield call(() => getRoots());
  yield put(addFamilyRoots(data));
}

function* fetchFamilyChildrenWorker({ payload: { id } }) {
  yield put(startBranchLoading(id));
  yield delay(1000);
  const children = yield call(() => getChildren(id));
  yield put(addFamilyChildren(id, children));
}

export function* familyWatcher() {
  yield takeEvery(FETCH_FAMILY_TABLE, fetchFamilyTableWorker);
  yield takeEvery(FETCH_FAMILY_TREE, fetchFamilyTreeWorker);
  yield takeEvery(FETCH_FAMILY_ROOTS, fetchFamilyRootsWorker);
  yield takeEvery(FETCH_FAMILY_CHILDREN, fetchFamilyChildrenWorker);
}
