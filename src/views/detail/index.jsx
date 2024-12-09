import { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeHeaderConfigAction } from '@/store/modules/main';

import { DetailWrapper } from './style';
import DetailPictures from './c-cpns/detail-pictures';
import RoomDetailHeader from './c-cpns/detail-info';
import DetailRoom from './c-cpns/detail-room';
import RoomLocation from './c-cpns/room-location';
const Detail = memo(() => {
  const dispatch = useDispatch();
  const { detailInfo } = useSelector(state => {
    return {
      detailInfo: state.detail.detailInfo,
    };
  });

  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }));
  }, [dispatch]);

  return (
    <DetailWrapper>
      <RoomDetailHeader />
      <DetailPictures detailInfo={detailInfo} />
      <DetailRoom detailInfo={detailInfo} />
      <RoomLocation />
    </DetailWrapper>
  );
});

export default Detail;
