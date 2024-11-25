import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
const App = memo(() => {
  return (
    <div className='app'>
      {/* 通用导航栏 */}
      <div className='header'>header</div>
      {/* 内容 */}
      <div className='content'>
        content
        {/* 子路由渲染位置 */}
        <Outlet />
      </div>
      {/* 通用底部 */}
      <div className='footer'>footer</div>
    </div>
  );
});

export default App;
