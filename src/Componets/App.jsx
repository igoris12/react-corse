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
    email: '',
    loged: false,
  });

  console.log(user);

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
    return response;
  };

  sendData('http://jsonplaceholder.typicode.com/users', { A: 3, b: 3 })
    .then((response) => {
      console.log(response.status);
    })
    .catch((e) => console.log(e));

  const getRegistration = (e) => {
    e.preventDefault();
    const info = new FormData(e.target);
    if (info.get('repPassword') === info.get('password')) {
      setUser({
        username: info.get('username'),
        email: info.get('email'),
        password: info.get('repPassword'),
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
