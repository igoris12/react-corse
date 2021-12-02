import React from 'react';
import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'restart':
      return 0;
    default:
      return state;
  }
};

function UseReduserCom() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <div>Count - {state} </div>
      <button onClick={() => dispatch('increment')}>increment</button>
      <button onClick={() => dispatch('decrement')}>decrement</button>
      <button onClick={() => dispatch('restart')}>restart</button>
    </div>
  );
}

export default UseReduserCom;
