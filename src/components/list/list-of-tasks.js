import React, { Component } from 'react';
import EditEntityInput from '../common/edit-entety-input';

export default class ListOfTasks extends Component {
  constructor() {
    super();

    this.state = {
      editTaskId: null,
    };
  }

  setEditTaskId = (editTaskId) => {
    this.setState({
      editTaskId,
    });
  }

  handleEdit = (value) => {
    const { tasks, onEdit } = this.props;
    const { editTaskId } = this.state;

    const task = tasks.find((t) => t.id === editTaskId);

    onEdit({ ...task, name: value });
  }

  render() {
    const { tasks } = this.props;
    const { editTaskId } = this.state;

    return (
      <ol>
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" />

            {editTaskId === task.id ? (
              <EditEntityInput value={task.name} onEdit={this.handleEdit} />
            ) : (<span>{task.name}</span>
            )}

            <button className="edit-btn" onClick={() => this.setEditTaskId(task.id)}>
              <i className="fas fa-edit" />
            </button>

            <button className="delete-btn">
              <i className="fas fa-trash-alt" />
            </button>
          </li>
        ))}
      </ol>
    );
  }
}
