import React, { useContext } from 'react';
import { workContext } from '../App';

function UseContextChild() {
  const info = useContext(workContext);
  return (
    <div>
      He is {info.titel} and now{' '}
      {info.employed ? 'is working.' : 'looking new work place.'}
    </div>
  );
}

export default UseContextChild;
