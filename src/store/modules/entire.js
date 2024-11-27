import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getEntireRoomListData } from '@/services/modules/entire';

export const fetchEntireRoomListDataAction = createAsyncThunk(
  'fetchEntireRoomListData',
  async (payload, { getState }) => {
    // 从 redux 中获取当前页码
    const currentPage = getState().entire.currentPage;

    // 发送网络请求
    const res = await getEntireRoomListData(currentPage * 20);
    console.log(res);
    return res;
  }
);

const entireSlice = createSlice({
  name: 'entire',
  initialState: {
    currentPage: 3,
    roomList: [],
    totalCount: 0,
  },
  reducers: {
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload;
    },
    changeRoomListAction(state, { payload }) {
      state.roomList = payload;
    },
    changeTotalCountAction(state, { payload }) {
      state.totalCount = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      fetchEntireRoomListDataAction.fulfilled,
      (state, { payload }) => {
        state.roomList = payload.list;
        state.totalCount = payload.totalCount;
      }
    );
  },
});

export const {
  changeCurrentPageAction,
  changeRoomListAction,
  changeTotalCountAction,
} = entireSlice.actions;
export default entireSlice.reducer;
