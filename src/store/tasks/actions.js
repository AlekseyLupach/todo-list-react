import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../services/api-service';
import * as types from './types';

export const getListTasks = createAsyncThunk(
  types.GET_LIST_TASK, (listId) => apiService.get(`lists/${listId}/tasks`),
);

export const addListTask = createAsyncThunk(
  types.ADD_LIST_TASK, async ({ newTask, listId }) => apiService.post(`lists/${listId}/tasks`, newTask),
);

export const updateListTask = createAsyncThunk(
  types.UPDATE_LIST_TASK, (task) => apiService.put(`lists/${task.listId}/tasks/${task.id}`, task),
);

export const deleteListTask = createAsyncThunk(
  types.DELETE_LIST_TASK,
  async ({ taskId, listId }) => {
    await apiService.delete(`lists/${listId}/tasks/${taskId}`);

    return taskId;
  },
);

export const deleteCheckedListTasks = createAsyncThunk(
  types.DELETE_CHECKED_LIST_TASK,
  async (listId, store) => {
    const state = store.getState();
    const { tasks } = state.tasks;

    const checkedTasks = tasks.filter((task) => task.checked);

    await Promise.all(
      checkedTasks.map((task) => apiService.delete(`lists/${listId}/tasks/${task.id}`)),
    );

    return checkedTasks.map((task) => task.id);
  },
);

export const reorderListTasks = createAsyncThunk(
  types.REORDER_CHECKED_LIST_TASKS,
  async ({ from, to, listId }) => {
    apiService.post(
      `lists/${listId}/reorder-tasks?from=${from}&to=${to}`
    );

    return { from, to }
  }
);