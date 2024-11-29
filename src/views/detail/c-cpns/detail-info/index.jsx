import { memo } from 'react';
import { RoomDetailWapper } from './style';
import IconShare from '@/assets/svg/icon_share';
import IconFavorite from '@/assets/svg/utils/icon_favorite';
import IconTranslate from '@/assets/svg/utils/icon_translate';
const RoomDetail = memo(() => {
  return (
    <RoomDetailWapper>
      <div className='room-detail'>
        <div className='title'>
          <span className='title-icon'>
            <IconTranslate />
          </span>
          <span className='title-text'>整套住宿</span>
        </div>
        <div className='actions'>
          <div className='action-item'>
            <span className='icon'>
              <IconShare />
            </span>
            <span className='text'>分享</span>
          </div>
          <div className='action-item'>
            <span className='icon'>
              <IconFavorite />
            </span>
            <span className='text'>收藏</span>
          </div>
        </div>
      </div>
    </RoomDetailWapper>
  );
});

export default RoomDetail;
