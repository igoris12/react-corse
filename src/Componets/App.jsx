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
  const [user, setUser] = useState({ username: '', password: '' });

  console.log(user);
  const goRegistrate = () => {
    setRegistration(true);
    setForm(true);
  };

  const getRegistration = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    // console.log(e);
    if (e.target[2].value === e.target[1].value) {
      setUser({
        username: e.target[0].value,
        password: e.target[1].value,
      });
      setLoged(true);
    } else {
      alert('Passwors must match!');
    }
  };

  const logout = () => {
    setLoged(false);
  };

  return (
    <div>
      <Logo />
      {!registration && !loged && (
        <LandingPage registrationHandler={goRegistrate} />
      )}
      {from && !loged && <Form getRegistration={getRegistration} />}
      {loged && <HomePage logout={logout} />}
    </div>
  );
};

export default App;
