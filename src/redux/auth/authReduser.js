import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userId: null,
    nikname: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState, 
    reducers: {
// actions
    }
})

const { actions, reducer } = authSlice;

export const {  } = actions;

export default reducer;