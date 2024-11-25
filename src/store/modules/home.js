import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getHomeGoodPriceData } from '@/services/modules/home';

export const fetchHomeDataAction = createAsyncThunk(
  'fetchHomeData',
  async payload => {
    const res = await getHomeGoodPriceData();
    console.log(res);
    return res;
  }
);

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    isLoading: false,
    goodPriceInfo: {}, // 高性价比
    highScoreInfo: {}, // 高分榜
    discountInfo: {}, // 折扣
    recommendInfo: {}, // 推荐
    longforInfo: {}, // 必住榜
    plusInfo: {}, // 周边
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.goodPriceInfo = payload;
    });
  },
});

export const { changeGoodPriceInfoAction } = homeSlice.actions;
export default homeSlice.reducer;
