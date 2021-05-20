import ActionStatus from '../../constans/action-status';
import * as types from './types';

const initalState = {
  tasks: [],
  status: ActionStatus.IDLE,
};

export default function tasks(state = initalState, action) {
  switch (action.type) {
    case types.GET_LIST_TASK_REQUEST:
    case types.ADD_LIST_TASK_REQUEST:
    case types.UPDATE_LIST_TASK_REQUEST:
    case types.DELETE_LIST_TASK_REQUEST:
    case types.DELETE_CHECKED_LIST_TASK_REQUEST: {
      return { ...state, status: ActionStatus.LOADING };
    }

    case types.DELETE_CHECKED_LIST_TASK_SUCCESS: {
      return {
        ...state,
        status: ActionStatus.SUCCEEDED,
        tasks: state.tasks.filter((task) => !action.payload.includes(task.id)),
      };
    }

    case types.DELETE_LIST_TASK_SUCCESS: {
      return {
        ...state,
        status: ActionStatus.SUCCEEDED,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    }

    case types.ADD_LIST_TASK_SUCCESS: {
      return { ...state, status: ActionStatus.SUCCEEDED, tasks: [...state.tasks, action.payload] };
    }

    case types.UPDATE_LIST_TASK_SUCCESS: {
      const updatedTask = action.payload;
      return {
        ...state,
        status: ActionStatus.SUCCEEDED,
        tasks: state.tasks.map((task) => {
          if (task.id === updatedTask.id) {
            return updatedTask;
          }
          return task;
        }),
      };
    }

    case types.GET_LIST_TASK_SUCCESS: {
      return { ...state, tasks: action.payload, status: ActionStatus.SUCCEEDED };
    }

    case types.REORDER_CHECKED_LIST_TASKS_SUCCESS: {
      const { from, to } = action.payload;

      const delta = from < to ? -1 : 1;
      return {
        ...state,
        status: ActionStatus.SUCCEEDED,
        tasks: state.tasks.map((task) => {
          if (task.order === from) {
            return { ...task, order: to };
          }

          if (delta) {
            if (task.order > from && task.order <= to) {
              return { ...task, order: task.order + delta };
            }
          } else if (task.order >= from && task.order < to) {
            return { ...task, order: task.order + delta };
          }
          return task;

        }),
      }
    }

    default: {
      return state;
    }
  }
}
