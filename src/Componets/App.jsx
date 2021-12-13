import React, { useState } from 'react';
import { createStore } from './Redux/createStore';
import { reducer } from './Redux/reducer';

const App = () => {
  const [state, setState] = useState(createStore(reducer, 0));
  // const state = createStore(reducer, 0);
  state.subscribe(() => {
    const count = state.getState();
    setState(count);
  });
  return (
    <div className="dark">
      <button className="btn-theme">Theme</button>

      <div className="contaner ">
        <h4>count - {state.getState()}</h4>
        <div className="btn-box">
          <button
            className="btn-add"
            onClick={() => state.dispatch({ type: 'ADD' })}
          >
            Increment
          </button>
          <button
            onClick={() => state.dispatch({ type: 'SUB' })}
            className="btn-sub"
          >
            Decrement
          </button>
          <button className="btn-async">Async</button>
        </div>
      </div>
    </div>
  );
};

export default App;
