import { memo } from 'react';
import { LongforItemWrapper } from './style';

const LongforItem = memo(({ itemData }) => {
  return (
    <LongforItemWrapper>
      <div className='inner'>
        <div className='city-info'>
          <img className='cover' src={itemData.picture_url} alt='' />
          <div className='bg-cover'></div>
          <div className='info'>
            <div className='city'>{itemData.city}</div>
            <div className='price'>均价 {itemData.price}</div>
          </div>
        </div>
      </div>
    </LongforItemWrapper>
  );
});

export default LongforItem;
