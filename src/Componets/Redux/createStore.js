export function createStore(reducer, initvalue) {
    let state = reducer(initvalue, { type: '_INI_' });
    let subscribers = [];

    return {
        dispatch(action) {
            state = reducer(state, action);
            subscribers.forEach(sub => sub())
        },
        subscribe(callback) {
            subscribers.push(callback);
        },
        getState() {
            return state
        }
    }
}