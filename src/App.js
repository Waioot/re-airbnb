import React, { memo, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
const App = memo(() => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className='app'>
      {/* 通用导航栏 */}
      <AppHeader />
      {/* 内容 */}
      <div className='content'>
        {/* 子路由渲染位置 */}
        <Outlet />
      </div>
      {/* 通用底部 */}
      <AppFooter />
    </div>
  );
});

export default App;
