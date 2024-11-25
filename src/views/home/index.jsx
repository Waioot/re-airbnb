import React, { memo, useEffect } from 'react';

import { HomeWrapper } from './style';
import HomeBanner from './c-cpns/home-banner';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchHomeDataAction } from '@/store/modules/home';
import SectionHeader from '@/components/section-header';
import RoomItem from '@/components/room-item';
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
          <ul className='room-list'>
            {goodPriceInfo?.list?.slice(0, 8).map(item => {
              return <RoomItem key={item.id} itemData={item} />;
            })}
          </ul>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
