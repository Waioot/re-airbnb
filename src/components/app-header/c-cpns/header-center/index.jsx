import React, { memo, useState } from 'react';
import { CenterWrapper } from './style';

import IconSearchBar from '@/assets/svg/icon_search_bar';
import SearchTabs from './c-cpns/saerch-tabs';
import SearchSections from './c-cpns/saerch-sections';
import SearchTitles from '@/assets/data/search_titles.json';

const HeaderCenter = memo(({ isSearch, searchClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = SearchTitles.map(item => item.title);
  function tabClickHandle(index) {
    setCurrentIndex(index);
  }
  function searchClickHandle() {
    searchClick();
  }
  return (
    <CenterWrapper>
      {isSearch ? (
        <>
          <div className='search-detail'>
            <SearchTabs titles={titles} tabClick={tabClickHandle} />
            <div className='infos'>
              <SearchSections
                searchInfos={SearchTitles[currentIndex].searchInfos}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='search-bar' onClick={searchClickHandle}>
            <div className='text'>搜索房源和体验</div>
            <div className='icon'>
              <IconSearchBar />
            </div>
          </div>
        </>
      )}
    </CenterWrapper>
  );
});

export default HeaderCenter;
