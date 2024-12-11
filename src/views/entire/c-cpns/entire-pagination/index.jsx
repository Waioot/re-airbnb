import React, { memo } from 'react';
import { EntirePaginationWrapper } from './style';
import { Pagination } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEntireRoomListDataAction } from '@/store/modules/entire';
import { shallowEqual } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

const selectEntireData = createSelector(
  [state => state.entire],
  entireState => ({
    totalCount: entireState.totalCount,
    currentPage: entireState.currentPage,
    roomList: entireState.roomList,
  })
);

const EntirePagination = memo(() => {
  // const { totalCount, currentPage, roomList } = useSelector(
  //   state => ({
  //     totalCount: state.entire.totalCount,
  //     currentPage: state.entire.currentPage,
  //     roomList: state.entire.roomList,
  //   }),
  //   shallowEqual
  // );
  const { totalCount, currentPage, roomList } = useSelector(
    selectEntireData,
    shallowEqual
  );

  const start = currentPage * 20 + 1;
  const end = (currentPage + 1) * 20;

  const dispatch = useDispatch();
  function handlePageChange(_, page) {
    // 回到顶部
    window.scrollTo(0, 0);
    dispatch(fetchEntireRoomListDataAction({ page }));
  }
  return (
    <EntirePaginationWrapper>
      {roomList.length > 0 && (
        <div className='info'>
          <Pagination
            count={Math.ceil(totalCount / 20)}
            page={currentPage + 1}
            onChange={handlePageChange}
          />
          <div className='desc'>
            第 {start} - {end} 个房源，共超过 {totalCount} 处房源
          </div>
        </div>
      )}
    </EntirePaginationWrapper>
  );
});

export default EntirePagination;
