import { memo, useCallback } from 'react';
import { WaterfallGridWrapper } from './style';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconButton from '@/components/icon-button';
import IconShare from '@/assets/svg/icon_share';
import IconFavorite from '@/assets/svg/icon_favorite';

const WaterfallGrid = memo(({ pictureUrls = [], closeClick }) => {
  const handleCloseClick = useCallback(() => {
    closeClick?.();
  }, [closeClick]);

  return (
    <WaterfallGridWrapper>
      <div className='top'>
        <div className='close-btn' onClick={handleCloseClick}>
          <IconArrowLeft />
        </div>
        <div className='operation'>
          <IconButton
            icon={<IconShare />}
            textStyle={{ textDecoration: 'underline' }}
            text='分享'
            hoverEffect={true}
          />
          <IconButton
            icon={<IconFavorite />}
            textStyle={{ textDecoration: 'underline' }}
            hoverEffect={true}
            text='收藏'
          />
        </div>
      </div>

      <div className='container'>
        <div className='grid'>
          {pictureUrls.map((item, index) => (
            <div className='item' key={index}>
              <img src={item} alt={`房屋图片${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </WaterfallGridWrapper>
  );
});

export default WaterfallGrid;
