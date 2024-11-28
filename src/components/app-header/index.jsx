import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { HeaderWrapper, SearchWrapper } from './style';
import HeaderLeft from './c-cpns/header-left';
import HeaderCenter from './c-cpns/header-center';
import HeaderRight from './c-cpns/header-right';

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false);
  function searchClickHandle() {
    setIsSearch(true);
  }
  function coverClickHandle() {
    setIsSearch(false);
  }

  const { isFixed } = useSelector(state => {
    return {
      isFixed: state.main.headerConfig.isFixed,
    };
  });
  return (
    <HeaderWrapper className={isFixed ? 'fixed' : ''}>
      <div className='content'>
        <div className='top'>
          <HeaderLeft />
          <HeaderCenter isSearch={isSearch} searchClick={searchClickHandle} />
          <HeaderRight />
        </div>
        <div className='search-area'>
          <SearchWrapper isSearch={isSearch} />
        </div>
      </div>
      {isSearch ? (
        <div className='cover' onClick={coverClickHandle}></div>
      ) : null}
    </HeaderWrapper>
  );
});

export default AppHeader;
