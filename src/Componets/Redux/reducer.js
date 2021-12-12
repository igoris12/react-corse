export function reducer(state, action) {
    // switch (action.type) {
    //     case "INCREMENT":
    //         return state + 1;
    //     default:
    //         return state
    // }
    if (action.type == 'ADD') {
        return state + 1;
    }
    return state
}
