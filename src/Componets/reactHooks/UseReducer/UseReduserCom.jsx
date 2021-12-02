import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 2;
    case 'restart':
      return 0;
    default:
      return state;
  }
};
function UseReduserCom() {
  const [count, dispatch] = useReducer(reducer, 5);
  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch('increment')}>increment</button>
      <button onClick={() => dispatch('decrement')}>decrement</button>
      <button onClick={() => dispatch('restart')}>restart</button>
    </div>
  );
}

export default UseReduserCom;
