import React from 'react';
import { useReducer } from 'react';

const initionState = {
  value: 0,
  value2: 50,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, value: state.value + action.value };
    case 'decrement':
      return { ...state, value: state.value - action.value };
    case 'increment2':
      return { ...state, value2: state.value2 + action.value };
    case 'decrement2':
      return { ...state, value2: state.value2 - action.value };
    case 'restart':
      return { ...state, value: initionState.value };
    case 'restart2':
      return { ...state, value2: initionState.value2 };
  }
};

function UseReduserCom2() {
  const [state, dispatch] = useReducer(reducer, initionState);
  return (
    <div>
      <div>Count - {state.value} </div>
      <div>Count 2 - {state.value2} </div>

      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 3 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: 'restart' })}>restart</button>
      <div>
        <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
          increment2
        </button>
        <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
          decrement2
        </button>
        <button onClick={() => dispatch({ type: 'restart2' })}>restart2</button>
      </div>
    </div>
  );
}

export default UseReduserCom2;
