import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  nikname: null,
  email: null,
  stateChange: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // actions
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      nikname: payload.nikname,
      email: payload.email,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload,
    }),
  },
});

const { actions, reducer } = authSlice;

export const { updateUserProfile } = actions;

export default reducer;
