import { combineReducers } from 'redux';
import countReducer from './countReducer.js';

const reducers = combineReducers({
    count: countReducer
})

export default reducers;