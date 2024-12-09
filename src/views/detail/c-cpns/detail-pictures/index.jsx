import { memo, useState } from 'react';
import { PicturesWrapper } from './style';
import PictureBrowser from '@/base-ui/picture-browser';
import IconShowAll from '@/assets/svg/icon_showAll';
import IconButton from '@/components/icon-button';

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
      <div className='show-all' onClick={e => showPictureBrowser(true)}>
        <IconButton
          icon={<IconShowAll />}
          text='查看全部图片'
          textStyle={{ marginLeft: '8px' }}
        />
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
