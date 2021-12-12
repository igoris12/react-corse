import React from 'react';
import { createStore } from './Redux/createStore';
import { reducer } from './Redux/reducer';

const state = createStore(reducer, 0);
console.log(state);

const App = () => {
  return (
    <div className="dark">
      <button className="btn-theme">Theme</button>

      <div className="contaner ">
        <h4>count - {state.getState()}</h4>
        <div className="btn-box">
          <button className="btn-add" onClick={state.dispatch('INCREMENT')}>
            Increment
          </button>
          <button className="btn-sub">Decrement</button>
          <button className="btn-async">Async</button>
        </div>
      </div>
    </div>
  );
};

export default App;
