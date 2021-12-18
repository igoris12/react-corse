import React, { useState } from 'react';

const LandingPage = ({ registrationHandler }) => {
  return (
    <div className="landingPage">
      <button className="but" onClick={registrationHandler}>
        Register with my email
      </button>
    </div>
  );
};

export default LandingPage;
