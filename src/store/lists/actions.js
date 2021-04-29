import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../services/api-service';
import * as types from './types';

export const addList = createAsyncThunk(types.ADD_LIST, async (list) => {

    const response = await apiService.post('lists', list);
    // то что она вернет будет payload
    return response;
})

// export const deleteList = (id) => ({
//     type: types.DELETE_LIST,
//     payload: id,
// });

export const deleteList = createAsyncThunk(types.DELETE_LIST, async (id) => {
    await apiService.delete(`lists/${id}`);
    return id;
})

export const getLists = createAsyncThunk(types.GET_LISTS, async () => {

    const response = await apiService.get('lists');
    // то что она вернет будет payload
    return response;
})