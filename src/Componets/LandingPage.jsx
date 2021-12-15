import React, { useState } from 'react';

const LandingPage = ({ registrationHandler }) => {
  return (
    <div className="landingPage">
      <button onClick={registrationHandler}>Registration</button>
    </div>
  );
};

export default LandingPage;
