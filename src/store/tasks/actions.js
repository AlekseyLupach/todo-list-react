import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../services/api-service';
import * as types from './types';

export const getListTasks = createAsyncThunk(types.GET_LIST_TASK, (listId) => apiService.get(`lists/${listId}/tasks`));

export const addListTask = createAsyncThunk(types.ADD_LIST_TASK, async ({ newTask, listId }) => apiService.post(`lists/${listId}/tasks`, newTask));

export const updateListTask = createAsyncThunk(types.UPDATE_LIST_TASK, (task) => apiService.put(`lists/${task.listId}/tasks/${task.id}`, task));
