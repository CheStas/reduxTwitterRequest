import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import saga from './sagas/sagas'
import rootReducer from './reducers/index';

const defaultState = {};
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    defaultState,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(saga)

export default store;

