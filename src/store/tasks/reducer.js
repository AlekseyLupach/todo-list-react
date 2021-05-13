import ActionStatus from '../../constans/action-status';
import * as types from './types';

const initalState = {
  tasks: [],
  status: ActionStatus.IDLE,
};

export default function tasks(state = initalState, action) {
  switch (action.type) {
    case types.GET_LIST_TASK_REQUEST:
    case types.ADD_LIST_TASK_REQUEST: {
      return { ...state, status: ActionStatus.LOADING };
    }

    case types.ADD_LIST_TASK_SUCCESS: {
      return { ...state, status: ActionStatus.SUCCEEDED, tasks: [...state.tasks, action.payload] };
    }

    case types.GET_LIST_TASK_SUCCESS: {
      return { ...state, tasks: action.payload, status: ActionStatus.SUCCEEDED };
    }

    default: {
      return state;
    }
  }
}
