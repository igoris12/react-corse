import React from 'react';

const HomePage = ({ email, logout }) => {
  return (
    <div className="homePage">
      <div>
        <h1>User is logetd</h1>
        <p>email : {email}</p>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default HomePage;
