import React, { memo } from 'react';
import { ItemWrapper } from './style';
import { Rating } from '@mui/material';
const RoomItem = memo(props => {
  const { itemData, itemWidth = '25%' } = props;
  return (
    <ItemWrapper
      itemWidth={itemWidth}
      verifyColor={itemData?.verify_info?.text_color || '#39576a'}
    >
      <div className='inner'>
        <div className='cover'>
          <img src={itemData.picture_url} alt='' />
        </div>
        <div className='desc'>{itemData.verify_info.messages.join('·')}</div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>￥{itemData.price}/晚</div>
        <div className='bottom'>
          <Rating
            name='half-rating-read'
            value={itemData.star_rating ?? 5}
            precision={0.5}
            sx={{ fontSize: '12px', color: '#00848A' }}
            readOnly
          />
          <span className='reviews'>{itemData.reviews_count}条评价</span>
          {itemData?.bottom_info?.content && (
            <span className='extra'>·{itemData?.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});

export default RoomItem;
