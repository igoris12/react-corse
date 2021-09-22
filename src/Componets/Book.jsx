import React from 'react';

export const Book = (props) => {
  return (
    <div className="todo">
      <div className="id">{props.data.id}</div>
      <img className="img" src={props.data.img} alt="img" />
      <div className="title">{props.data.title}</div>
      <div className="status"></div>
      <button onClick={() => props.buy(props.data.id)} className="but">
        {props.data.price}$
      </button>
    </div>
  );
};

export default Book;
