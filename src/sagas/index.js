import { all, fork } from 'redux-saga/effects';
import watchSearch from './search';

export default function* rootSaga() {
    yield all([
        fork(watchSearch),
    ]);
}
