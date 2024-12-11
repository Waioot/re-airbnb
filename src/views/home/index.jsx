import React, { memo, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { shallowEqual } from 'react-redux';
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

  const goodPriceInfo = useSelector(
    state => state.home.goodPriceInfo,
    shallowEqual
  );
  const highScoreInfo = useSelector(
    state => state.home.highScoreInfo,
    shallowEqual
  );
  const discountInfo = useSelector(
    state => state.home.discountInfo,
    shallowEqual
  );
  const recommendInfo = useSelector(
    state => state.home.recommendInfo,
    shallowEqual
  );
  const longforInfo = useSelector(
    state => state.home.longforInfo,
    shallowEqual
  );
  const plusInfo = useSelector(state => state.home.plusInfo, shallowEqual);

  useEffect(() => {
    dispatch(fetchHomeDataAction());
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }));
  }, [dispatch]);

  const navigate = useNavigate();

  const handleShowRoomDetail = useCallback(
    function (item) {
      navigate('/detail');
    },
    [navigate]
  );

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        {/* 向往数据 */}
        {!isEmptyObject(longforInfo) && <HomeLongfor infoData={longforInfo} />}

        {/* 折扣数据（热门目的地） */}
        {!isEmptyObject(discountInfo) && (
          <HomeSectionV2
            roomClick={handleShowRoomDetail}
            infoData={discountInfo}
          />
        )}
        {/* 热门推荐房源 */}
        {!isEmptyObject(recommendInfo) && (
          <HomeSectionV2
            roomClick={handleShowRoomDetail}
            infoData={recommendInfo}
          />
        )}

        {/* 高性价比房源 */}
        {!isEmptyObject(goodPriceInfo) && (
          <HomeSectionV1
            roomClick={handleShowRoomDetail}
            infoData={goodPriceInfo}
          />
        )}

        {/* 高评分房源 */}
        {!isEmptyObject(highScoreInfo) && (
          <HomeSectionV1
            roomClick={handleShowRoomDetail}
            infoData={highScoreInfo}
          />
        )}
        {/* 特色房源数据 */}
        {!isEmptyObject(plusInfo) && (
          <HomeSectionV3 roomClick={handleShowRoomDetail} infoData={plusInfo} />
        )}
      </div>
    </HomeWrapper>
  );
});

export default Home;
