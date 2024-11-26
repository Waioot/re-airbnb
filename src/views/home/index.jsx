import React, { memo, useEffect } from 'react';

import { HomeWrapper } from './style';
import HomeBanner from './c-cpns/home-banner';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchHomeDataAction } from '@/store/modules/home';
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';
import HomeSectionV1 from './c-cpns/home-section-v1';

const Home = memo(() => {
  const dispatch = useDispatch();

  // 从 redux 中获取数据
  const { goodPriceInfo, highScoreInfo } = useSelector(
    state => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
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
        <HomeSectionV1
          title={goodPriceInfo.title}
          roomList={goodPriceInfo.list}
        />
        <HomeSectionV1
          title={highScoreInfo.title}
          roomList={highScoreInfo.list}
        />
      </div>
    </HomeWrapper>
  );
});

export default Home;
