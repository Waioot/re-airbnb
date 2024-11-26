import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { HomeWrapper } from './style';
import HomeBanner from './c-cpns/home-banner';
import HomeSectionV1 from './c-cpns/home-section-v1';
import HomeSectionV2 from './c-cpns/home-section-v2';
import HomeLongfor from './c-cpns/home-longfor';
import { fetchHomeDataAction } from '@/store/modules/home';
import { isEmptyObject } from '@/utils';

const Home = memo(() => {
  const dispatch = useDispatch();

  // 从 redux 中获取数据
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
  } = useSelector(
    state => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
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
        {/* 向往数据 */}
        {!isEmptyObject(longforInfo) && <HomeLongfor infoData={longforInfo} />}

        {/* 折扣数据 */}
        {!isEmptyObject(discountInfo) && (
          <HomeSectionV2 infoData={discountInfo} />
        )}
        {/* 热门推荐房源 */}
        {!isEmptyObject(recommendInfo) && (
          <HomeSectionV2 infoData={recommendInfo} />
        )}

        {/* 高评分数据 */}
        {!isEmptyObject(goodPriceInfo) && (
          <HomeSectionV1 infoData={goodPriceInfo} />
        )}
        {!isEmptyObject(highScoreInfo) && (
          <HomeSectionV1 infoData={highScoreInfo} />
        )}
      </div>
    </HomeWrapper>
  );
});

export default Home;
