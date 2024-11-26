import React, { memo, useEffect } from 'react';

import { HomeWrapper } from './style';
import HomeBanner from './c-cpns/home-banner';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchHomeDataAction } from '@/store/modules/home';
import SectionHeader from '@/components/section-header';
import RoomItem from '@/components/room-item';
import SectionRooms from '@/components/section-rooms';

const Home = memo(() => {
  const dispatch = useDispatch();

  // 从 redux 中获取数据
  const { goodPriceInfo } = useSelector(
    state => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );

  // 派发异步事件： 发送网络请求
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        <div className='good-price'>
          <SectionHeader title={goodPriceInfo.title} />
          <SectionRooms goodPriceInfo={goodPriceInfo} />
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
