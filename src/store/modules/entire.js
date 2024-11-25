import { createSlice } from '@reduxjs/toolkit';

const entireSlice = createSlice({
  name: 'entire',
  initialState: {},
  reducers: {},
});

export const { actions } = entireSlice;
export default entireSlice.reducer;
