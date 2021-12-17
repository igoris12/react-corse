import React, { useState, useEffect } from 'react';
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
    email: '',
    loged: false,
  });

  const goRegistrate = () => {
    setRegistration(true);
    setForm(true);
  };

  const sendData = async (url, data) => {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      localStorage.setItem('userInfo', JSON.stringify(data));
    }
    return await response.json();
  };

  const getRegistration = (e) => {
    e.preventDefault();
    if (e.target[2].value === e.target[3].value) {
      setUser({
        username: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
        loged: true,
      });

      const data2 = {
        username: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
        loged: true,
      };

      sendData('http://jsonplaceholder.typicode.com/users', data2).then(
        (response) => {
          console.log(response);
        }
      );
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
