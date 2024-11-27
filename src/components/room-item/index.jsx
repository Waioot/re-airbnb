import React, { memo, useCallback, useRef } from 'react';
import { ItemWrapper } from './style';
import { Rating } from '@mui/material';
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';

const RoomItem = memo(({ itemData, itemWidth = '25%' }) => {
  const carouselRef = useRef();

  const controlClickHandle = useCallback(isNext => {
    if (carouselRef.current) {
      isNext ? carouselRef.current.next() : carouselRef.current.prev();
    }
  }, []);

  return (
    <ItemWrapper itemWidth={itemWidth}>
      <div className='inner'>
        {!itemData?.picture_urls ? (
          <div className='cover'>
            <img src={itemData?.picture_url} alt='' />
          </div>
        ) : (
          <div className='slider'>
            <div className='control'>
              <div
                className='btn left'
                onClick={e => controlClickHandle(false)}
              >
                <IconArrowLeft width='24' height='24' />
              </div>
              <div
                className='btn right'
                onClick={e => controlClickHandle(true)}
              >
                <IconArrowRight width='24' height='24' />
              </div>
            </div>
            {/* 轮播图 */}
            <Carousel dots={false} ref={carouselRef}>
              {itemData?.picture_urls?.map(url => {
                return (
                  <div className='cover' key={url}>
                    <img src={url} className='item' alt='' />
                  </div>
                );
              })}
            </Carousel>
          </div>
        )}
        <div className='desc'>{itemData?.verify_info?.messages?.join('·')}</div>
        <div className='name'>{itemData?.name}</div>
        <div className='price'>￥{itemData?.price}/晚</div>
        <div className='bottom'>
          <Rating
            name='half-rating-read'
            value={itemData?.star_rating ?? 5}
            precision={0.5}
            sx={{ fontSize: '12px', color: '#00848A' }}
            readOnly
          />
          <span className='reviews'>{itemData?.reviews_count}条评价</span>
          {itemData?.bottom_info?.content && (
            <span className='extra'>·{itemData?.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});

export default RoomItem;
