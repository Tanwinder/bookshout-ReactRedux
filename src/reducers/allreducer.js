import { combineReducers } from 'redux';
import {data, details} from './data-reducer';

// 3rd step create all reducers and add reducers in it
const allreducers = combineReducers({
    data: data,
    details: details
});

export default allreducers;