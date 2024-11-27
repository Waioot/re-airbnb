import React, { memo, useCallback } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import RoomItem from '@/components/room-item';
import { EntireRoomsWrapper } from './style';
import { useNavigate } from 'react-router-dom';
import { changeDetailInfoAction } from '@/store/modules/detail';

const EntireRooms = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector(
    state => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleShowRoomDetail = useCallback(
    function (item) {
      dispatch(changeDetailInfoAction(item));
      navigate('/detail');
    },
    [navigate, dispatch]
  );
  return (
    <EntireRoomsWrapper>
      {/* 标题 */}
      <h2 className='title'>
        共 <em>{totalCount}</em> 处住所
      </h2>
      {/* 房间列表 */}
      <div className='list'>
        {roomList.map(item => {
          return (
            <RoomItem
              key={item.id}
              itemData={item}
              itemWidth='25%'
              roomClick={handleShowRoomDetail}
            />
          );
        })}
      </div>
      {isLoading && <div className='room-cover'></div>}
    </EntireRoomsWrapper>
  );
});

export default EntireRooms;
