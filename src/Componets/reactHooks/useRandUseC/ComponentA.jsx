import React, { useContext } from 'react';
import { CountState } from '../../../Data/context';
import ComponentB from './ComponentB';

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
