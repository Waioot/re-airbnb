import React, { memo } from 'react';
import { PicturesWrapper } from './style';

const DetailPictures = memo(({ detailInfo }) => {
  return (
    <PicturesWrapper>
      <div className='pictures'>
        <div className='left'>
          <div className='item'>
            <img src={detailInfo.picture_urls?.[0]} alt='' />
            <div className='cover'></div>
          </div>
        </div>
        <div className='right'>
          {detailInfo.picture_urls?.slice(1, 5).map(url => {
            return (
              <div className='item'>
                <img src={url} alt='' />
                <div className='cover'></div>
              </div>
            );
          })}
        </div>
      </div>
    </PicturesWrapper>
  );
});

export default DetailPictures;
