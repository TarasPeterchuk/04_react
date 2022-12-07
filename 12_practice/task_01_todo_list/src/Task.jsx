import React from 'react';
import ClassNames from 'classnames';

const Task = ({ id, done, text, onChange, onDelete }) => {
  // const listItemClasses = `list-item ${done ? 'list-item_done' : ''}`;
  // const listItemClasses = ClassNames('list-item', { 'list-item_done': done });

  return (
    <li className={ClassNames('list-item', { 'list-item_done': done })}>
      <input
        type="checkbox"
        defaultChecked={done}
        className="list-item__checkbox"
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => onDelete(id)}
      ></button>
    </li>
  );
};

export default Task;
