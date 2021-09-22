import React from 'react';

function Todo(props) {
  return (
    <div className="todo">
      <div className="id">{props.data.id}</div>

      <div className="title">{props.data.title}</div>
      <div
        className="status"
        onClick={() => props.sniuriukas(props.data.id)}
        style={{
          backgroundColor: props.data.completed === false ? 'red' : 'green',
        }}
      ></div>
    </div>
  );
}
export default Todo;
