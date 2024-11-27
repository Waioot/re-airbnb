import YRequest from '../request';

export function getEntireRoomListData(offset = 0, size = 20) {
  return YRequest.get({
    url: '/entire/list',
    params: {
      offset,
      size,
    },
  });
}
