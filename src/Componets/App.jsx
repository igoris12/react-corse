import React, { useState } from 'react';
import Counter1 from './Counter1';
import Form from './Form';
import HomePage from './HomePage';
import LandingPage from './LandingPage';
import Logo from './Logo';

const App = () => {
  const [registration, setRegistration] = useState(false);
  const [from, setForm] = useState(false);
  const [loged, setLoged] = useState(false);
  const [email, setEmail] = useState('');

  const goRegistrate = () => {
    setRegistration(true);
    setForm(true);
  };

  const login = () => {
    if (email == '') {
      return;
    }
    setLoged(true);
  };
  const logout = () => {
    setLoged(false);
  };

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <Logo />
      {!registration && !loged && (
        <LandingPage registrationHandler={goRegistrate} />
      )}
      {from && !loged && (
        <Form getUser={login} email={email} onChange={onChange} />
      )}
      {loged && <HomePage email={email} logout={logout} />}
    </div>
  );
};

export default App;
