import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../services/api-service';
import * as types from './types';

export const addList = createAsyncThunk(types.ADD_LIST, async (list) => apiService.post('lists', list));

export const deleteList = createAsyncThunk(types.DELETE_LIST, async (id) => {
  apiService.delete(`lists/${id}`);
  return id;
});

export const getLists = createAsyncThunk(types.GET_LISTS, async () => apiService.get('lists'));
