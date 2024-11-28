import { memo, useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { HeaderWrapper, SearchWrapper } from './style';
import HeaderLeft from './c-cpns/header-left';
import HeaderCenter from './c-cpns/header-center';
import HeaderRight from './c-cpns/header-right';
import useScrollPosition from '@/hooks/useScrollPosition';

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false);

  const { isFixed, topAlpha } = useSelector(state => {
    return {
      isFixed: state.main.headerConfig.isFixed,
      topAlpha: state.main.headerConfig.topAlpha,
    };
  });

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
            <SearchWrapper isSearch={isAlpha || isSearch} />
          </div>
        </div>
        {isSearch ? (
          <div className='cover' onClick={e => setIsSearch(false)}></div>
        ) : null}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default AppHeader;
