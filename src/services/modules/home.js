import YRequest from '../request';

export async function getHomeGoodPriceData() {
  return YRequest.get({
    url: '/home/goodprice',
  });
}
