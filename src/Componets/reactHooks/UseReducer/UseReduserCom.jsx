import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state++;
    case 'decrement':
      return state++;
    case 'restart':
      return (state = initialState);
    default:
      return state;
  }
};
function UseReduserCom() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count}</div>
      <button>increment</button>
      <button>decrement</button>
      <button>restart</button>
    </div>
  );
}

export default UseReduserCom;
