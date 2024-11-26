import { memo, useState, useRef, useEffect } from 'react';
import { ScrollViewWrapper } from './style';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';

const ScrollView = memo(({ children }) => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const totalDistanceRef = useRef(0);
  const scrollIndexRef = useRef(0);

  const scrollContentRef = useRef();

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; // 内容宽度(所有子元素宽度之和，也是可滚动宽度)
    const clientWidth = scrollContentRef.current.clientWidth; // 容器宽度(可视宽度)
    const totalDistance = scrollWidth - clientWidth; // 总可滚动宽度
    totalDistanceRef.current = totalDistance;
    setShowRight(scrollWidth > clientWidth);
  }, [children]);

  // 处理点击切换事件
  const handleControlClick = (isLeft = false) => {
    const newIndex = isLeft
      ? scrollIndexRef.current - 1
      : scrollIndexRef.current + 1;
    const newItem = scrollContentRef.current.children[newIndex];
    const newElOffsetLeft = newItem.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`;
    scrollIndexRef.current = newIndex;
    // 是否继续显示右边按钮
    setShowRight(totalDistanceRef.current > newElOffsetLeft);
    // 是否显示左边按钮
    setShowLeft(newElOffsetLeft > 0);
  };

  return (
    <ScrollViewWrapper>
      {showLeft && (
        <div className='control left' onClick={() => handleControlClick(true)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div
          className='control right'
          onClick={() => handleControlClick(false)}
        >
          <IconArrowRight />
        </div>
      )}
      <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef}>
          {children}
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

export default ScrollView;
