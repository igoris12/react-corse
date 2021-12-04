import React, { useReducer } from 'react';
import UseReduserCom from './reactHooks/UseReducer/UseReduserCom';
import UseReduserCom2 from './reactHooks/UseReducer/UseReduserCom2';
import UseReduserCom3 from './reactHooks/UseReducer/UseReduserCom3';
import ComponentA from './reactHooks/useRandUseC/ComponentA';
import { CountState } from '../Data/context';

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

function App() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <CountState.Provider>
      {/* <UseReduserCom /> */}
      {/* <UseReduserCom2 /> */}
      {/* <UseReduserCom3 /> */}
      <ComponentA />
    </CountState.Provider>
  );
}

export default App;
