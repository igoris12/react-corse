import React from 'react';
import Drawer from './Drawer';

const HomePage = ({ content, logout }) => {
  return (
    <div className="homePage">
      <div>
        <Drawer />
        <span className="drawer-toggle">
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
