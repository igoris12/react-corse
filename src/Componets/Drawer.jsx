import React from 'react';

const Drawer = ({ toggle, logout }) => {
  return (
    <div
      style={toggle ? { width: '20%' } : { width: '0' }}
      className="drawer-box"
    >
      {toggle && (
        <button onClick={logout} className="but-menu">
          Logout
        </button>
      )}
    </div>
  );
};

export default Drawer;
