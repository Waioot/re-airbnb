import { memo, useState, useRef, useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { HeaderWrapper, SearchWrapper } from './style';
import HeaderLeft from './c-cpns/header-left';
import HeaderCenter from './c-cpns/header-center';
import HeaderRight from './c-cpns/header-right';
import useScrollPosition from '@/hooks/useScrollPosition';

import { createSelector } from '@reduxjs/toolkit';

// 创建记忆化的选择器
const selectHeaderConfig = createSelector(
  [state => state.main.headerConfig],
  headerConfig => ({
    isFixed: headerConfig.isFixed,
    topAlpha: headerConfig.topAlpha,
  })
);

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false);

  // 使用记忆化的选择器
  const { isFixed, topAlpha } = useSelector(selectHeaderConfig, shallowEqual);

  const { scrollY } = useScrollPosition();
  const prevY = useRef(0);

  useEffect(() => {
    if (!isSearch) {
      prevY.current = scrollY;
    }
    if (isSearch && Math.abs(scrollY - prevY.current) > 30) {
      setIsSearch(false);
    }
  }, [scrollY, isSearch]);

  function searchClickHandle() {
    setIsSearch(true);
  }

  /** 顶部透明逻辑 */
  const isAlpha = topAlpha && scrollY === 0;

  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={isFixed ? 'fixed' : ''}>
        <div className='content'>
          <div className='top'>
            <HeaderLeft />
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              searchClick={searchClickHandle}
            />
            <HeaderRight />
          </div>
          <div className='search-area'>
            <SearchWrapper $isSearch={isAlpha || isSearch} />
          </div>
        </div>
        {isSearch && (
          <div className='cover' onClick={e => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default AppHeader;
