import React, { Component } from 'react';
import AddEntityFrom from '../common/add-entity-form';
import ListOfTasks from './list-of-tasks';

export default class List extends Component {
  render() {
    return (
      <>
        <div className="add-form">
          <AddEntityFrom />
        </div>

        <div className="todo-list">
          <ListOfTasks tasks={[]} />
        </div>

        <div className="delete-checked-wrapper">
          <button className="delete-checked-btn">Delete Checked</button>
        </div>
      </>
    );
  }
}
