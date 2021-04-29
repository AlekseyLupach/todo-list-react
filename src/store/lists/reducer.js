import ActionStatus from '../../constans/action-status';
import * as types from './types';

const initalState = {
  lists: [],
  status: ActionStatus.IDLE,
};

export default function lists(state = initalState, action) {
  switch (action.type) {
    case types.ADD_LIST_SUCCESS: {
      return {
        ...state,
        lists: [...state.lists, action.payload],
        status: ActionStatus.SUCCEEDED,
      };
    }

    case types.DELETE_LIST_SUCCESS: {
      return {
        ...state,
        lists: state.lists.filter((lists) => lists.id !== action.payload),
        status: ActionStatus.SUCCEEDED,
      };
    }

    case types.ADD_LIST_REQUEST:
    case types.DELETE_LIST_REQUEST:
    case types.GET_LISTS_REQUEST: {
      return {
        ...state,
        status: ActionStatus.LOADING,
      };
    }

    case types.GET_LISTS_SUCCESS: {
      return {
        ...state,
        lists: action.payload,
        status: ActionStatus.SUCCEEDED,
      };
    }

    default: {
      return state;
    }
  }
}
