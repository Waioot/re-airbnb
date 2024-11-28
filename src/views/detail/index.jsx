import { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeHeaderConfigAction } from '@/store/modules/main';

import { DetailWrapper } from './style';
import DetailPictures from './c-cpns/detail-pictures';
const Detail = memo(() => {
  const dispatch = useDispatch();
  const { detailInfo } = useSelector(state => {
    return {
      detailInfo: state.detail.detailInfo,
    };
  });

  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false }));
  }, [dispatch]);

  return (
    <DetailWrapper>
      <DetailPictures detailInfo={detailInfo} />
    </DetailWrapper>
  );
});

export default Detail;
