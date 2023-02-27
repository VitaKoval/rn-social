import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   posts: [
        {
      postId: "",
      description: "",
      district: null,
      imageUrl: "",
      location: "",
      nikname: "",
      userId: "",
    },
  ],
  likes: [],
}

const authSlice = createSlice({
    name: 'dashboard',
    initialState, 
    reducers: {
// actions
        addComment: (state, { payload }) => ({
        
    })
    }
})

const { actions, reducer } = authSlice;

export const {  } = actions;

export default reducer;