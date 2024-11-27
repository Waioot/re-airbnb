import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getEntireRoomListData } from '@/services/modules/entire';

export const fetchEntireRoomListDataAction = createAsyncThunk(
  'fetchEntireRoomListData',
  async (payload = { page: 0 }, { dispatch }) => {
    // 修改当前页码
    dispatch(changeCurrentPageAction(payload.page));
    // 发送网络请求
    const res = await getEntireRoomListData(payload.page * 20);
    // 保存房源列表到 redux
    dispatch(changeRoomListAction(res.list));
    // 保存房源总数到 redux
    dispatch(changeTotalCountAction(res.totalCount));
    return res;
  }
);

const entireSlice = createSlice({
  name: 'entire',
  initialState: {
    isLoading: false,
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
    builder.addCase(fetchEntireRoomListDataAction.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchEntireRoomListDataAction.fulfilled, state => {
      state.isLoading = false;
    });
  },
});

export const {
  changeCurrentPageAction,
  changeRoomListAction,
  changeTotalCountAction,
} = entireSlice.actions;
export default entireSlice.reducer;
