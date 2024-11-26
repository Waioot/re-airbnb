import React, { memo, useEffect } from 'react';

import { HomeWrapper } from './style';
import HomeBanner from './c-cpns/home-banner';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchHomeDataAction } from '@/store/modules/home';
import HomeSectionV1 from './c-cpns/home-section-v1';
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';

const Home = memo(() => {
  const dispatch = useDispatch();

  // 从 redux 中获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    state => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
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
        {/* 折扣数据 */}
        <div className='discount'>
          <SectionHeader
            title={discountInfo.title}
            subtitle={discountInfo.subtitle}
          />
          <SectionRooms
            roomList={discountInfo.dest_list?.['成都']}
            itemWidth='33.33%'
          />
        </div>

        {/* 高评分数据 */}
        <HomeSectionV1 infoData={goodPriceInfo} />
        <HomeSectionV1 infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
