import YRequest from '../request';

// 获取高性价比房源数据
export async function getHomeGoodPriceData() {
  return YRequest.get({
    url: '/home/goodprice',
  });
}

// 获取高评分房源数据
export async function getHomeHighScoreData() {
  return YRequest.get({
    url: '/home/highscore',
  });
}

// 获取折扣房数据
export async function getHomeDiscountData() {
  return YRequest.get({
    url: '/home/discount',
  });
}

// 获取热门推荐数据
export async function getHomeHotRecommendData() {
  return YRequest.get({
    url: '/home/hotrecommenddest',
  });
}
