import React, { memo, useState } from 'react';
import { TabsWrapper } from './style';

const SearchTabs = memo(props => {
  const { titles, tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  function itemClickHandle(index) {
    setCurrentIndex(index);
    if (tabClick) tabClick(index);
  }

  return (
    <TabsWrapper>
      {titles.map((item, index) => {
        return (
          <div
            className={`item ${currentIndex === index ? 'active' : ''}`}
            key={item}
            onClick={e => itemClickHandle(index)}
          >
            <span className='text'>{item}</span>
            <span className='bottom'></span>
          </div>
        );
      })}
    </TabsWrapper>
  );
});

export default SearchTabs;
