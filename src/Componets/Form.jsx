import React from 'react';

const Form = ({ getUser, onChange, email }) => {
  return (
    <div className="from">
      <form onSubmit={getUser}>
        <input
          onChange={onChange}
          type="email"
          name="email"
          placeholder="Name"
          value={email}
        />
        <button type="submit">Registrate</button>
      </form>
    </div>
  );
};

export default Form;
