import React, { memo, useEffect, useCallback, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { HomeWrapper } from './style';
import HomeBanner from './c-cpns/home-banner';
import SectionTabs from '@/components/section-tabs';
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

  const [tabName, setTabName] = useState('佛山');
  // 数据转换
  const tabNames = discountInfo?.dest_address?.map(item => item.name);
  // 组件间通信
  const handleClickItem = useCallback((index, tabName) => {
    setTabName(tabName);
  }, []);
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
          <SectionTabs tabNames={tabNames} tabClick={handleClickItem} />
          <SectionRooms
            roomList={discountInfo?.dest_list?.[tabName]}
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
