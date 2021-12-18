import React from 'react';

const Drawer = ({ toggle }) => {
  return (
    <div
      style={toggle ? { width: '20%' } : { width: '0' }}
      className="drawer-box"
    >
      {toggle && <button>Logout</button>}
    </div>
  );
};

export default Drawer;
