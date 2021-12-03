import React from 'react';
import { useReducer } from 'react';

const initionState = {
  value: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { value: state.value + action.value };
    case 'decrement':
      return { value: state.value - action.value };
    case 'restart':
      return initionState;
  }
};

function UseReduserCom2() {
  const [state, dispatch] = useReducer(reducer, initionState);
  return (
    <div>
      <div>Count - {state.value} </div>
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 3 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: 'restart' })}>restart</button>
    </div>
  );
}

export default UseReduserCom2;
