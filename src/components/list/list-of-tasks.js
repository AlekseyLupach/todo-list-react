import React from 'react';

const ListOfTasks = ({ tasks }) => (
  <ol>
    {tasks.map((task) => (
      <li key={task.id}>
        <input type="checkbox" />

        <span>
          $
          {task.text}
        </span>

        <button className="edit-btn">
          <i className="fas fa-edit" />
        </button>

        <button className="delete-btn">
          <i className="fas fa-trash-alt" />
        </button>
      </li>
    ))}
  </ol>
);

export default ListOfTasks;
