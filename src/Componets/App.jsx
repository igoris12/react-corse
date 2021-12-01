import React from 'react';
import UseContex from './reactHooks/UseContex';
import { Context, workContext } from '../Data/context.jsx';

const App = () => {
  const userInfo = { name: 'Josh', age: 39 };
  const workInfo = { titel: 'Developer', employed: false };
  return (
    <workContext.Provider value={workInfo}>
      <Context.Provider value={userInfo}>
        <UseContex />
      </Context.Provider>
    </workContext.Provider>
  );
};

export default App;
