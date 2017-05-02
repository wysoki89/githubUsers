import {combineReducers} from 'redux';
import { selectUser } from './users';

const allReducers = combineReducers({
    selectUser
});

export default allReducers
