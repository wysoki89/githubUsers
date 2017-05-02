export function selectUser(state = {}, action) {
    switch (action.type) {
        case 'SELECT_USER':
            return action.user;

        default:
            return state;
    }
}

export function usersHasErrored(state = false, action) {
    switch (action.type) {
        case 'USERS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function usersIsLoading(state = false, action) {
    switch (action.type) {
        case 'USERS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function users(state = [], action) {
    switch (action.type) {
        case 'USERS_FETCH_DATA_SUCCESS':
            return action.users;

        default:
            return state;
    }
}

export function inputChange(state = null, action) {
    switch (action.type) {
        case 'INPUT_CHANGED':
            return action.input;
       default:
            return state;
    }
}