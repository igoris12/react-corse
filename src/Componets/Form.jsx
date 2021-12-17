import React from 'react';

const Form = ({ getRegistration }) => {
  return (
    <div className="formContainer">
      <form onSubmit={getRegistration} className="form">
        <input type="text" name="username" placeholder="Username" />
        <input type="email" name="email" required placeholder="E-mail" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="repPassword"
          placeholder="Repeat password"
          required
        />
        <button type="submit">Create my account</button>
      </form>
    </div>
  );
};

export default Form;
