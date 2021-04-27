import * as types from './types';

const initalState = {
    lists: [],
    status: 'idle',
}

export default function lists(state = initalState, action) {
    switch (action.type) {
        case types.ADD_LIST_SUCCESS: {
            return {
                ...state,
                lists: [...state.lists, action.payload],
                status: 'socceeded'
            };
        }

        case types.DELETE_LIST: {
            return {
                ...state,
                lists: state.lists.filter((lists) => lists.id !== action.payload),
            };
        }

        case types.ADD_LIST_REQUEST:
        case types.GET_LISTS_REQUEST: {
            return {
                ...state,
                status: 'loading',
            }
        }

        case types.GET_LISTS_SUCCESS: {
            return {
                ...state,
                lists: action.payload,
                status: 'succeeded'
            }
        }

        default: {
            return state;
        }
    }
}