import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    headerConfig: {
      isFixed: false,
      topAlpha: false, // 首页头部是否使用透明
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
