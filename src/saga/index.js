import { all } from 'redux-saga/effects';
import { familyWatcher } from './familySaga';

export function* rootWatcher() {
  yield all([familyWatcher()])
}