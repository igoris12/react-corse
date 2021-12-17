import React from 'react';

const HomePage = ({ content, logout }) => {
  return (
    <div className="homePage">
      <div>
        {JSON.stringify(content)}
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default HomePage;
