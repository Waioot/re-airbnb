import { memo, useEffect, useRef } from 'react';
import { IndicatorWrapper } from './style';

const Indicator = memo(({ children, selectedIndex = 0 }) => {
  const contentRef = useRef();

  useEffect(() => {
    // 获取当前选中的 item
    const selectedItem = contentRef.current.children[selectedIndex];
    const itemLeft = selectedItem.offsetLeft;
    const itemWidth = selectedItem.clientWidth;
    // content 的宽度
    const contentWidth = contentRef.current.clientWidth;
    const contentScroll = contentRef.current.scrollWidth;
    // 计算距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;
    // 往左移动特殊情况
    if (distance < 0) {
      distance = 0;
    }
    const totalDistance = contentScroll - contentWidth;
    // 往右移动特殊情况
    if (distance > totalDistance) {
      distance = totalDistance;
    }
    // 滚动
    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectedIndex]);
  return (
    <IndicatorWrapper>
      <div className='i-content' ref={contentRef}>
        {children}
      </div>
    </IndicatorWrapper>
  );
});

export default Indicator;
