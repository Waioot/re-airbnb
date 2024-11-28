import { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEntireRoomListDataAction } from '@/store/modules/entire';
import { changeHeaderConfigAction } from '@/store/modules/main';
import { EntireWrapper } from './style';
import EntireFilter from './c-cpns/entire-filter';
import EntireRooms from './c-cpns/entire-rooms';
import EntirePagination from './c-cpns/entire-pagination';
const Entire = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntireRoomListDataAction());
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }));
  }, [dispatch]);
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
