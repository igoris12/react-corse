import React from 'react';
import { useState } from 'react';

function AnimalF(props) {
  const [editInput, setEditInput] = useState('');

  const editInputHandler = (e) => {
    setEditInput(e.target.value);
  };
  if (
    (props.farmNumber === 1 && props.farm1) ||
    (props.farmNumber === 2 && !props.farm1)
  ) {
    return (
      <div
        className="animal"
        style={{
          backgroundColor: props.color,
          borderRadius: props.animal == 'cow' ? '50%' : '5px',
        }}
      >
        <div>
          <span>{props.color}</span>
        </div>
        <div className="insideForm">
          <input type="text" value={editInput} onChange={editInputHandler} />
          <button
            className="but"
            onClick={() => props.editColor(props.id, editInput)}
          >
            Edit
          </button>

          <button className="but" onClick={() => props.delete(props.id)}>
            Delete
          </button>
          <button className="but" onClick={() => props.changeType(props.id)}>
            change type
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
export default AnimalF;
