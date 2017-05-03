import axios from 'axios';

export function selectUser(user) {
    return {
        type: 'SELECT_USER',
        payload: user
    };
}
export function fetchUsers(url) {
    return {
        type:"FETCH_USERS",
        payload: axios.get(url)
    }
}