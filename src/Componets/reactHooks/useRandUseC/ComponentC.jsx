import React, { useContext } from 'react';
import { CountState } from '../../../Data/context';

function ComponentC() {
  const state = useContext(CountState);
  return (
    <div>
      Componetnt C Count - {state.count}
      <button onClick={() => state.countDispatch('increment')}>
        increment
      </button>
      <button onClick={() => state.countDispatch('decrement')}>
        decrement
      </button>
      <button onClick={() => state.countDispatch('restart')}>restart</button>
    </div>
  );
}

export default ComponentC;
