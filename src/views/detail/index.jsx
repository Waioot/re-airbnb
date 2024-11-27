import { memo } from 'react';
import { useSelector } from 'react-redux';

import { DetailWrapper } from './style';
import DetailPictures from './c-cpns/detail-pictures';
const Detail = memo(() => {
  const { detailInfo } = useSelector(state => {
    return {
      detailInfo: state.detail.detailInfo,
    };
  });

  return (
    <DetailWrapper>
      <DetailPictures detailInfo={detailInfo} />
    </DetailWrapper>
  );
});

export default Detail;
