import React, { useContext } from 'react';
import { CountState } from '../../../Data/context';
import ComponentC from './ComponentC';
function ComponentB() {
  const state = useContext(CountState);
  return (
    <div>
      Componetnt B Count - {state.count}
      <button onClick={() => state.countDispatch('increment')}>
        increment
      </button>
      <button onClick={() => state.countDispatch('decrement')}>
        decrement
      </button>
      <button onClick={() => state.countDispatch('restart')}>restart</button>
      <ComponentC />
    </div>
  );
}

export default ComponentB;
