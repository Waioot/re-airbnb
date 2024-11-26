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
