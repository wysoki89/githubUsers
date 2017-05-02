import {combineReducers} from 'redux';
import { usersHasErrored, usersIsLoading, users, selectUser, inputChange } from './users';

const allReducers = combineReducers({
    selectUser,
    usersHasErrored,
    usersIsLoading,
    users,
    inputChange
});

export default allReducers
