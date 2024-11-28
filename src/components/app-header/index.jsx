import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { HeaderWrapper } from './style';
import HeaderLeft from './c-cpns/header-left';
import HeaderCenter from './c-cpns/header-center';
import HeaderRight from './c-cpns/header-right';

const AppHeader = memo(() => {
  const { isFixed } = useSelector(state => {
    return {
      isFixed: state.main.headerConfig.isFixed,
    };
  });
  console.log(isFixed);
  return (
    <HeaderWrapper className={isFixed ? 'fixed' : ''}>
      <div className='content'>
        <div className='top'>
          <HeaderLeft />
          <HeaderCenter />
          <HeaderRight />
        </div>
        <div className='search-area'></div>
      </div>
      <div className='cover'></div>
    </HeaderWrapper>
  );
});

export default AppHeader;
