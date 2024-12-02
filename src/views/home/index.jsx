import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeHeaderConfigAction } from '@/store/modules/main';
import { HomeWrapper } from './style';
import HomeBanner from './c-cpns/home-banner';
import HomeSectionV1 from './c-cpns/home-section-v1';
import HomeSectionV2 from './c-cpns/home-section-v2';
import HomeSectionV3 from './c-cpns/home-section-v3';
import HomeLongfor from './c-cpns/home-longfor';
import { fetchHomeDataAction } from '@/store/modules/home';
import { isEmptyObject } from '@/utils';

const Home = memo(() => {
  const dispatch = useDispatch();

  const goodPriceInfo = useSelector(state => state.home.goodPriceInfo);
  const highScoreInfo = useSelector(state => state.home.highScoreInfo);
  const discountInfo = useSelector(state => state.home.discountInfo);
  const recommendInfo = useSelector(state => state.home.recommendInfo);
  const longforInfo = useSelector(state => state.home.longforInfo);
  const plusInfo = useSelector(state => state.home.plusInfo);

  useEffect(() => {
    dispatch(fetchHomeDataAction());
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }));
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
        {/* 特色房源数据 */}
        {!isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
