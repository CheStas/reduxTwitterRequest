import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import saga from './sagas/sagas'
import rootReducer from './reducers/index';

const defaultState = {};
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    defaultState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga)

export default store;

