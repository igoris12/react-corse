import React from 'react';

const HomePage = ({ email, logout }) => {
  return (
    <div className="homePage">
      <div>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default HomePage;
