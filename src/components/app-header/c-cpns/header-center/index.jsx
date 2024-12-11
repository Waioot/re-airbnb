import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CenterWrapper } from './style';

import IconSearchBar from '@/assets/svg/icon_search_bar';
import SearchTabs from './c-cpns/saerch-tabs';
import SearchSections from './c-cpns/saerch-sections';
import SearchTitles from '@/assets/data/search_titles.json';

const HeaderCenter = memo(({ isSearch, searchClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = SearchTitles.map(item => item.title);

  // 动画变体配置
  const searchBarVariants = {
    hidden: {
      opacity: 0,
      scale: [0.1, 0.3],
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.25 },
    },
    exit: {
      opacity: 0,
      scale: [0.1, 0.3],
      y: 20,
      transition: { duration: 0.25 },
    },
  };

  const searchDetailVariants = {
    hidden: {
      opacity: 0,
      scale: [0.1, 0.3],
      y: -20,
    },
    visible: {
      opacity: 1,
      scale: 0.5,
      y: 0,
      transition: { duration: 0.25 },
    },
    exit: {
      opacity: 0,
      scale: [0.1, 0.3],
      y: -20,
      transition: { duration: 0.25 },
    },
  };

  return (
    <CenterWrapper>
      <AnimatePresence mode='wait'>
        {!isSearch && (
          <motion.div
            className='search-bar'
            onClick={searchClick}
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={searchBarVariants}
            key='search-bar'
          >
            <div className='text'>搜索房源和体验</div>
            <div className='icon'>
              <IconSearchBar />
            </div>
          </motion.div>
        )}

        {isSearch && (
          <motion.div
            className='search-detail'
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={searchDetailVariants}
            key='search-detail'
          >
            <SearchTabs
              titles={titles}
              tabClick={index => setCurrentIndex(index)}
            />
            <div className='infos'>
              <SearchSections
                searchInfos={SearchTitles[currentIndex].searchInfos}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </CenterWrapper>
  );
});

export default HeaderCenter;
