import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from '../common/loader';
import ListOfTasks from './list-of-tasks';

import AddEntityFrom from '../common/add-entity-form';

import EntityType from '../../constans/entity-type';

import ActionStatus from '../../constans/action-status';

import {
  addListTask, getListTasks, updateListTask, deleteListTask, deleteCheckedListTasks, reorderListTasks,
} from '../../store/tasks/actions';
import getLastOrder from '../../utils';

class List extends Component {
  componentDidMount() {
    const { getListTasks } = this.props;

    getListTasks();
  }

  handleAddListTask = (newTask) => {
    const { addListTask, tasks } = this.props;

    const order = getLastOrder(tasks);

    addListTask({ ...newTask, checked: false, order });
  }

  render() {
    const {
      tasks,
      updateListTask,
      status,
      deleteListTask,
      deleteCheckedListTasks,
      reorderListTasks,
    } = this.props;

    const sortedTasks = [...tasks].sort((a, b) => a.order - b.order);

    return (
      <>
        <div className="add-form">
          <AddEntityFrom type={EntityType.TASK} onSubmit={this.handleAddListTask} />
        </div>

        <div className="todo-list">
          <ListOfTasks
            tasks={sortedTasks}
            onEdit={updateListTask}
            onDelete={deleteListTask}
            onReorder={reorderListTasks}
          />
        </div>

        <div className="delete-checked-wrapper">
          <button className="delete-checked-btn" onClick={deleteCheckedListTasks}>Delete Checked</button>
        </div>

        {status === ActionStatus.LOADING && <Loader />}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks.tasks,
    status: state.tasks.status,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { match: { params } } = ownProps;
  return {
    getListTasks: () => dispatch(getListTasks(params.id)),
    addListTask: (newTask) => dispatch(addListTask({ newTask, listId: params.id })),
    updateListTask: (task) => dispatch(updateListTask(task)),
    deleteListTask: (taskId) => dispatch(deleteListTask({ taskId, listId: params.id })),
    deleteCheckedListTasks: () => dispatch(deleteCheckedListTasks(params.id)),
    reorderListTasks: ({ from, to }) => dispatch(reorderListTasks({ listId: params.id, from, to }))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
