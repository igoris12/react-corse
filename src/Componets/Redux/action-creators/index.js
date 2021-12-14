export const addCount = () => {
    return (dispatch) => {
        dispatch({
            type: 'ADD'
        })
    }
}

export const subCount = () => {
    return (dispatch) => {
        dispatch({
            type: 'SUB'
        })
    }
}

// tyr to make it wihout nested func...