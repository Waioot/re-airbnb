import { memo, useState, useEffect } from 'react';
import { PicturesWrapper } from './style';
// import PictureBrowser from '@/base-ui/picture-browser';
import IconShowAll from '@/assets/svg/icon_showAll';
import IconButton from '@/components/icon-button';
import WaterfallGrid from '@/base-ui/waterfall-grid';

const DetailPictures = memo(({ detailInfo }) => {
  const [showBrower, setShowBrower] = useState(false);

  function showPictureBrowser(show) {
    setShowBrower(show);
  }

  //showBrower为 true 时， 浏览器滚动条和瀑布流滚动条冲突
  // 解决方法： 使用全局监听事件， 当showBrower为 true 时， 监听浏览器滚动条， 当瀑布流滚动条滚动时， 阻止浏览器滚动条滚动
  useEffect(() => {
    if (showBrower) {
      document.body.style.overflow = 'hidden';
      const scrollTop = 60;
      console.log(scrollTop);
      // 设置滚动条的开始位置
      window.scrollTo(0, scrollTop);
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showBrower]);

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
        <div className='picture-browser'>
          <WaterfallGrid
            pictureUrls={detailInfo.picture_urls}
            closeClick={() => showPictureBrowser(false)}
          />
        </div>
      )}
    </PicturesWrapper>
  );
});

export default DetailPictures;
