import React, { useContext } from 'react';
import { workContext } from '../App';

function UseContextChild() {
  const info = useContext(workContext);
  return (
    <div>
      {typeof info == 'object'
        ? `He is ${info.titel} and now 
      ${info.employed ? 'is working.' : 'looking new work place.'}`
        : info}
    </div>
  );
}

export default UseContextChild;
