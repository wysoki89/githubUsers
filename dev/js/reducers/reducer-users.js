// /*
//  * The users reducer will always return an array of users no matter what
//  * You need to return something, so if there are no users then just return an empty array
//  * */

// export default function () {
//     return [
//         {
//             id: 1,
//             first: "Bucky",
//             last: "Roberts",
//             age: 71,
//             description: "Bucky is a React developer and YouTuber",
//             thumbnail: "http://i.imgur.com/7yUvePI.jpg"
//         },
//         {
//             id: 2,
//             first: "Joby",
//             last: "Wasilenko",
//             age: 27,
//             description: "Joby loves the Packers, cheese, and turtles.",
//             thumbnail: "http://i.imgur.com/52xRlm8.png"
//         },
//         {
//             id: 3,
//             first: "Madison",
//             last: "Williams",
//             age: 24,
//             description: "Madi likes her dog but it is really annoying.",
//             thumbnail: "http://i.imgur.com/4EMtxHB.png"
//         }
//     ]
// }


/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

// import promise from 'redux-promise-middleware';

const initialState = {
    geting: false,
    geted: false,
    users: [],
    error: null
}
// reducer changes part of store (its property ?)
// export default userReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "GET_USERS": {
//             return Object.assign({}, state, {geting: true})
//         }
//         case "GET_USERS_FULFILLED": {
//             return Object.assign({}, state, {geting: false, geted: true, users: action.payload.data.items})
//         }
//         case "GET_USERS_REJECTED": {
//             return Object.assign({}, state, {geting: false, error: action.payload})
//         }
//     }
//     return state
// }

export default function (state = [], action) {
    switch (action.type) {
        case "GET_USERS": {
            // return Object.assign({}, state, {geting: true})
                return action.payload.data.items
        }
        case "GET_USERS_FULFILLED": {
            // return Object.assign({}, state, {geting: false, geted: true, users: action.payload.data.items})
            // return action.payload.data.items;
            
        }
        case "GET_USERS_REJECTED": {
            // return Object.assign({}, state, {geting: false, error: action.payload})
        }
    }
    return state
}
