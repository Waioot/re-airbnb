import { memo, useEffect, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import IconTriangleBottom from '@/assets/svg/icon-triangle-bottom';
import IconClose from '@/assets/svg/icon-close';
import { BrowserWrapper } from './style';
import Indicator from '../indicator';
import IconTriangleTop from '@/assets/svg/icon-triangle-top';

const PictureBrowser = memo(({ pictureUrls, showPictureBrowser }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [isShowPictureList, setIsShowPictureList] = useState(true);

  // 当图片浏览器展示出来时，浏览器滚动条会消失，当图片浏览器隐藏时，浏览器滚动条会显示
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  function closePictureBrowser() {
    console.log('closePictureBrowser');
    showPictureBrowser(false);
  }

  function handlePictureChange(offset) {
    setIsNext(() => offset > 0);
    setCurrentIndex(prev => {
      const newIndex = prev + offset;
      return Math.min(Math.max(newIndex, 0), pictureUrls.length - 1);
    });
  }
  return (
    <BrowserWrapper isNext={isNext}>
      <div className='top'>
        <div className='close-btn' onClick={closePictureBrowser}>
          <IconClose />
        </div>
      </div>
      <div className='slider'>
        <div className='control'>
          <div className='btn left' onClick={e => handlePictureChange(-1)}>
            <IconArrowLeft width={77} height={77} />
          </div>
          <div className='btn right' onClick={e => handlePictureChange(1)}>
            <IconArrowRight width={77} height={77} />
          </div>
        </div>
        <div className='picture'>
          <SwitchTransition mode='in-out'>
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames='pic'
              timeout={200}
            >
              <img src={pictureUrls[currentIndex]} alt='' />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>

      <div className='preview'>
        <div className='info'>
          <div className='desc'>
            <div className='count'>
              <span>
                {currentIndex + 1}/{pictureUrls.length}
              </span>
              <span>room apartment picture {currentIndex + 1}</span>
            </div>
            <div
              className='toggle'
              onClick={e => setIsShowPictureList(!isShowPictureList)}
            >
              <span>{isShowPictureList ? '隐藏照片列表' : '显示照片列表'}</span>
              {isShowPictureList ? <IconTriangleBottom /> : <IconTriangleTop />}
            </div>
          </div>
          <div
            className='list'
            style={{ height: isShowPictureList ? '67px' : '0' }}
          >
            <Indicator selectIndex={currentIndex}>
              {pictureUrls.map((item, index) => {
                return (
                  <div
                    className={`item ${index === currentIndex ? 'active' : ''}`}
                    key={index}
                    onClick={e => {
                      setCurrentIndex(index);
                      if (index > currentIndex) {
                        setIsNext(true);
                      } else {
                        setIsNext(false);
                      }
                    }}
                  >
                    <img src={item} alt='' />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  );
});

export default PictureBrowser;
