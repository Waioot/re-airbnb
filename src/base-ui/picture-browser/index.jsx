import { memo, useEffect } from 'react';

import { BrowserWrapper } from './style';
import IconClose from '@/assets/svg/icon-close';

const PictureBrowser = memo(({ pictureUrls, showPictureBrowser }) => {
  // 当图片浏览器展示出来时，浏览器滚动条会消失，当图片浏览器隐藏时，浏览器滚动条会显示
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  function closePictureBrowser() {
    showPictureBrowser(false);
  }
  return (
    <BrowserWrapper>
      <div className='top'>
        <div className='close-btn' onClick={closePictureBrowser}>
          <IconClose />
        </div>
      </div>
      <div className='list'></div>
      <div className='indicator'></div>
    </BrowserWrapper>
  );
});

export default PictureBrowser;
