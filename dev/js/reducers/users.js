const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null,
    selectedUser: null
}

export function users(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_USERS_PENDING': {
            return Object.assign({}, state, {fetching:true});
            break;
        }
        case 'FETCH_USERS_REJECTED': {
            return Object.assign({}, state, {fetching:false, error: action.payload});
            break;
        }
        case 'FETCH_USERS_FULFILLED': {
            var users = action.payload.data.items;
            if (users.length >= 30) {
                users.slice(0, 30)
            }   
            return Object.assign({}, state, {fetching:false, fetched:true, users:users});
            break;
        }
        case 'SELECT_USER': {
             return Object.assign({}, state, {selectedUser: action.payload});
             break;
        }
    }
    return state;

}


