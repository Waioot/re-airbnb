import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    headerConfig: {
      isFixed: false,
    },
  },
  reducers: {
    changeHeaderConfigAction: (state, action) => {
      state.headerConfig = action.payload;
    },
  },
});

export default mainSlice.reducer;
export const { changeHeaderConfigAction } = mainSlice.actions;
