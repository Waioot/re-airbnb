import { memo } from 'react';
import { RoomDetailWapperHeader } from './style';
import IconShare from '@/assets/svg/icon_share';
import IconTranslate from '@/assets/svg/icon_translate';
import IconFavorite from '@/assets/svg/icon_favorite';
import IconButton from '@/components/icon-button';
const RoomDetailHeader = memo(() => {
  return (
    <RoomDetailWapperHeader>
      <div className='room-detail'>
        {/* <div className='title'>
          <span className='title-icon'>
            <IconTranslate />
          </span>
          <span className='title-text'>整套住宿</span>
        </div> */}
        <IconButton
          icon={<IconTranslate />}
          text='整套住宿'
          textStyle={{ fontSize: '22px', fontWeight: '500' }}
        />
        <div className='actions'>
          {/* <div className='action-item'>
            <span className='icon'>
              <IconShare />
            </span>
            <span className='text'>分享</span>
          </div> */}
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
          {/* <div className='action-item'>
            <span className='icon'>
              <IconFavorite />
            </span>
            <span className='text'>收藏</span>
          </div> */}
        </div>
      </div>
    </RoomDetailWapperHeader>
  );
});

export default RoomDetailHeader;
