import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    image: null,
    nameImage: null,
}

const authSlice = createSlice({
    name: 'dashboard',
    initialState, 
    reducers: {
// actions
    }
})

const { actions, reducer } = authSlice;

export const {  } = actions;

export default reducer;