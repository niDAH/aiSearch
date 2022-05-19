import {
    applyMiddleware,
    createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

// TODO: shouldn't be needed, but eslint is being crabby -- figure it out.
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return { store };
};
