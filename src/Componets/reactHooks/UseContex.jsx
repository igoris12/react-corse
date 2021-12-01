import React from 'react';
import { useContext } from 'react';
import { Context } from '../../Data/context.jsx';
import UseContextChild from './UseContextChild';
function UseContex() {
  const userInfo = useContext(Context);
  return (
    <div>
      {userInfo.name} he is {userInfo.age} old.
      <UseContextChild />
    </div>
  );
}

export default UseContex;
