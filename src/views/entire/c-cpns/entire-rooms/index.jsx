import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import RoomItem from '@/components/room-item';
import { EntireRoomsWrapper } from './style';
const EntireRooms = memo(() => {
  const { roomList, totalCount } = useSelector(state => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
  }));
  return (
    <EntireRoomsWrapper>
      {/* 标题 */}
      <h2 className='title'>
        共 <em>{totalCount}</em> 处住所
      </h2>
      {/* 房间列表 */}
      <div className='list'>
        {roomList.map(item => {
          return <RoomItem key={item.id} itemData={item} itemWidth='25%' />;
        })}
      </div>
    </EntireRoomsWrapper>
  );
});

export default EntireRooms;
