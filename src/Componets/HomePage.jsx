import React, { useState } from 'react';
import Drawer from './Drawer';

const HomePage = ({ content, logout }) => {
  const [show, setShow] = useState(false);
  const toggleDrawer = () => {
    setShow(!show);
  };

  return (
    <div className="homePage">
      <div>
        <Drawer toggle={show} logout={logout} />
        <span onClick={toggleDrawer} className="drawer-toggle">
          {show ? (
            <div>
              <span></span> <span></span>
              <span></span>
            </div>
          ) : (
            <div className="close">X</div>
          )}
        </span>
        <div>{JSON.stringify(content)}</div>
      </div>
    </div>
  );
};

export default HomePage;
