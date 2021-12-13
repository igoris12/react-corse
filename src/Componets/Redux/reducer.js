export function reducer(state, action) {

    if (action.type == 'ADD') {
        return state + 1;
    }
    if (action.type == 'SUB') {
        return state - 1;
    }
    return state
}
