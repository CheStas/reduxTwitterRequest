import { combineReducers } from 'redux';
import TwittersReducer from './reducer_twitters';

const rootReducer = combineReducers({
    twitters: TwittersReducer
});

export default rootReducer;
