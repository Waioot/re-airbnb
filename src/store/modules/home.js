import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
} from '@/services/modules/home';

// 1. 异步 action creator
export const fetchHomeDataAction = createAsyncThunk(
  'fetchHomeData',
  async payload => {
    // const res = await getHomeGoodPriceData();

    // 执行异步操作
    // 使用 Promise.all 并发请求
    const [goodPriceRes, highScoreRes, discountRes] = await Promise.all([
      getHomeGoodPriceData(),
      getHomeHighScoreData(),
      getHomeDiscountData(),
    ]);
    // 这个返回值会自动成为 fulfilled case 中的 payload
    return { goodPriceRes, highScoreRes, discountRes };
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
    // 同步 Action
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
  },
  // 2. 在 extraReducers 中处理状态更新
  extraReducers: builder => {
    builder.addCase(fetchHomeDataAction.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.goodPriceInfo = payload.goodPriceRes;
      state.highScoreInfo = payload.highScoreRes;
      state.discountInfo = payload.discountRes;
    });
  },
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
} = homeSlice.actions;
export default homeSlice.reducer;
