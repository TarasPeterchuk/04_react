import React from 'react';
import ClassNames from 'classnames';

const Task = ({ done, text }) => {
  // const listItemClasses = `list-item ${done ? 'list-item_done' : ''}`;
  // const listItemClasses = ClassNames('list-item', { 'list-item_done': done });

  return (
    <li className={ClassNames('list-item', { 'list-item_done': done })}>
      <input
        type="checkbox"
        defaultChecked={done}
        className="list-item__checkbox"
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn"></button>
    </li>
  );
};

export default Task;
