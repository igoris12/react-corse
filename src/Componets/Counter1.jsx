import React from 'react';

const Counter1 = () => {
  return (
    <div className="dark">
      <button className="btn-theme">Theme</button>

      <div className="contaner ">
        <h4>count - 0</h4>
        <div className="btn-box">
          <button className="btn-add">Increment</button>
          <button
            // onClick={() => state.dispatch({ type: 'SUB' })}
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

export default Counter1;
