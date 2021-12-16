import React, { useState } from 'react';
import Counter1 from './Counter1';
import Form from './Form';
import HomePage from './HomePage';
import LandingPage from './LandingPage';
import Logo from './Logo';

const App = () => {
  const [registration, setRegistration] = useState(false);
  const [from, setForm] = useState(false);

  const [user, setUser] = useState({
    username: '',
    password: '',
    loged: false,
  });

  console.log(user);
  const goRegistrate = () => {
    setRegistration(true);
    setForm(true);
  };

  const getRegistration = (e) => {
    e.preventDefault();
    if (e.target[2].value === e.target[1].value) {
      setUser({
        username: e.target[0].value,
        password: e.target[1].value,
        loged: true,
      });
    } else {
      alert('Passwors must match!');
    }
  };

  const logout = () => {
    setUser({
      ...user,
      loged: false,
    });
  };

  return (
    <div>
      <Logo />
      {!registration && !user.loged && (
        <LandingPage registrationHandler={goRegistrate} />
      )}
      {from && !user.loged && <Form getRegistration={getRegistration} />}
      {user.loged && <HomePage logout={logout} />}
    </div>
  );
};

export default App;
