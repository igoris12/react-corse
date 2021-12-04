import React, { useContext } from 'react';
import ComponentB from './ComponentB';
import { CountState } from '../../../Data/context';

function ComponentA() {
  const state = useContext(CountState);
  return (
    <div>
      Componetnt A Count - {state.count}
      <button onClick={() => state.countDispatch('increment')}>
        increment
      </button>
      <button onClick={() => state.countDispatch('decrement')}>
        decrement
      </button>
      <button onClick={() => state.countDispatch('restart')}>restart</button>
      <ComponentB />
    </div>
  );
}

export default ComponentA;
