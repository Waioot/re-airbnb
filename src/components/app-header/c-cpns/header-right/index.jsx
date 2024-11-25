import React, { memo, useState, useEffect } from 'react';

import { RightWrapper } from './style';
import IconMenu from '@/assets/svg/icon_menu';
import IconAvatar from '@/assets/svg/icon_avatar';
import IconGlobal from '@/assets/svg/icon_global';

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);

  // 副作用代码
  useEffect(() => {
    function windowClickHandle() {
      setShowPanel(false);
    }
    // true 表示在捕获阶段执行监听
    window.addEventListener('click', windowClickHandle, true);
    return () => {
      window.removeEventListener('click', windowClickHandle);
    };
  }, []);

  // 事件处理函数

  function profileClickHandle() {
    setShowPanel(!showPanel);
  }

  return (
    <RightWrapper>
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal />
        </span>
      </div>
      <div className='profile' onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />
        {showPanel && (
          <div className='panel'>
            <div className='top'>
              <div className='item register'>注册</div>
              <div className='item login'>登录</div>
            </div>
            <div className='bottom'>
              <div className='item'>出租房源</div>
              <div className='item'>开展体验</div>
              <div className='item'>帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
