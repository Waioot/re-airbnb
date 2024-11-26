import { memo, useState } from 'react';

import { SectionTabsWrapper } from './style';
import ScrollView from '@/base-ui/scroll-view';

const SectionTabs = memo(({ tabNames = [], tabClick }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleClickItem = (index, cityName) => {
    setCurrentTabIndex(index);
    tabClick(index, cityName);
  };

  return (
    <SectionTabsWrapper>
      <ScrollView>
        {tabNames.map((cityName, index) => {
          return (
            <div
              key={cityName}
              className={`item ${currentTabIndex === index ? 'active' : ''}`}
              onClick={() => handleClickItem(index, cityName)}
            >
              {cityName}
            </div>
          );
        })}
      </ScrollView>
    </SectionTabsWrapper>
  );
});

export default SectionTabs;
