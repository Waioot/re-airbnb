import { memo, useState } from 'react';
import { PicturesWrapper } from './style';
import PictureBrowser from '@/base-ui/picture-browser';

const DetailPictures = memo(({ detailInfo }) => {
  const [showBrower, setShowBrower] = useState(false);

  function showPictureBrowser(show) {
    setShowBrower(show);
  }
  return (
    <PicturesWrapper>
      <div className='pictures'>
        <div className='left'>
          <div className='item' onClick={e => showPictureBrowser(true)}>
            <img src={detailInfo.picture_urls?.[0]} alt='' />
            <div className='cover'></div>
          </div>
        </div>
        <div className='right'>
          {detailInfo.picture_urls?.slice(1, 5).map(url => {
            return (
              <div
                className='item'
                key={url}
                onClick={e => showPictureBrowser(true)}
              >
                <img src={url} alt='' />
                <div className='cover'></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='show-btn' onClick={e => showPictureBrowser(true)}>
        查看图片
      </div>
      {showBrower && (
        <PictureBrowser
          pictureUrls={detailInfo.picture_urls}
          showPictureBrowser={showPictureBrowser}
        />
      )}
    </PicturesWrapper>
  );
});

export default DetailPictures;
