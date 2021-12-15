import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './Redux/index';

const Counter1 = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { addCount, subCount } = bindActionCreators(actionCreators, dispatch);
  // console.log(AC);
  return (
    <div className="dark">
      <button className="btn-theme">Theme</button>

      <div className="contaner ">
        <h4>count - {state.count} </h4>
        <div className="btn-box">
          <button className="btn-add" onClick={() => addCount()}>
            Increment
          </button>
          <button className="btn-sub" onClick={() => subCount()}>
            Decrement
          </button>
          <button className="btn-async">Async</button>
        </div>
      </div>
    </div>
  );
};

export default Counter1;
