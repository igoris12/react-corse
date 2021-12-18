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
        <Drawer toggle={show} />
        <span onClick={toggleDrawer} className="drawer-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div>{JSON.stringify(content)}</div>
      </div>
    </div>
  );
};

export default HomePage;
