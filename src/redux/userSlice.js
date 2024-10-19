import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
  },
  reducers: {
    setUserName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const selectUserName = (state) => state.user.name;

export const { setUserName } = userSlice.actions;
export default userSlice.reducer;
