import axios from 'axios';

export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

// export const getUsers = () => {
//     return {
//         type: "GET_USERS",
//         payload: axios.get("https://api.github.com/search/users?q=wysoki")
//     }
// };

export const getUsers = (input) => {
    return {
        type: "GET_USERS",
        payload: axios.get("https://api.github.com/search/users?q=" + input + " in:login")
        // payload: axios.get("https://api.github.com/search/users?q=wysoki")    
    }
};
