export function selectUser(user) {
    return {
        type: 'SELECT_USER',
        user
    };
}

export function usersHasErrored(bool) {
    return {
        type: 'USERS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function usersIsLoading(bool) {
    return {
        type: 'USERS_IS_LOADING',
        isLoading: bool
    };
}

export function usersFetchDataSuccess(users) {
    return {
        type: 'USERS_FETCH_DATA_SUCCESS',
        users
    };
}
export function usersFetchData(url) {
    return (dispatch) => {
        dispatch(usersIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(usersIsLoading(false));

                return response.json();
            })
            .then((users) => {
                // console.log(users)
                if (users.items.length >= 30) {
                    users.items.slice(0, 30)
                }
                // console.log(users)
                return users.items;
                // return { options: data };
            })
            // .then((response) => response.json())
            .then((data) => dispatch(usersFetchDataSuccess(data)))
            .catch(() => dispatch(usersHasErrored(true)));
    };
}

export function inputChange(input) {
    // console.log(input)
    return {
        type: 'INPUT_CHANGED',
        input
    };
}