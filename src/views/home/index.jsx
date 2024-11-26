import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { HomeWrapper } from './style';
import HomeBanner from './c-cpns/home-banner';
import HomeSectionV1 from './c-cpns/home-section-v1';
import HomeSectionV2 from './c-cpns/home-section-v2';
import { fetchHomeDataAction } from '@/store/modules/home';
import { isEmptyObject } from '@/utils';

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
        {!isEmptyObject(discountInfo) && (
          <HomeSectionV2 infoData={discountInfo} />
        )}
        {/* 高评分数据 */}
        <HomeSectionV1 infoData={goodPriceInfo} />
        <HomeSectionV1 infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
