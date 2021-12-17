import React, { useState, useEffect } from 'react';
import Form from './Form';
import HomePage from './HomePage';
import LandingPage from './LandingPage';
import Logo from './Logo';

const App = () => {
  const [registration, setRegistration] = useState(false);
  const [from, setForm] = useState(false);
  const [loged, setLoged] = useState(false);

  const [user, setUser] = useState({
    username: '',
    password: '',
    email: '',
  });

  useEffect(() => {
    const dataCopy = localStorage.getItem('userInfo');
    dataCopy !== null && setLoged(true);
  }, []);

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
      setLoged(true);
    }
    return await response.json();
  };

  const getRegistration = (e) => {
    e.preventDefault();
    let data = {};
    if (e.target[2].value === e.target[3].value) {
      data = {
        username: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
      };

      sendData('http://jsonplaceholder.typicode.com/users', data).then(
        (response) => {
          console.log(response);
          // need get in the home page
        }
      );
    } else {
      alert('Passwors must match!');
    }
  };

  const logout = () => {
    localStorage.removeItem('userInfo');
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
