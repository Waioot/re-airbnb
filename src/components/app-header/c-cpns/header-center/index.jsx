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
    initial: {
      opacity: 0,
      scale: 1,
      x: 20,
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 1,
      x: -20,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  };

  const searchDetailVariants = {
    initial: {
      opacity: 0,
      scale: 1,
      x: -20,
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 1,
      x: 20,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  };

  return (
    <CenterWrapper>
      <AnimatePresence mode='wait' initial={false}>
        {!isSearch ? (
          <motion.div
            className='search-bar'
            onClick={searchClick}
            variants={searchBarVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            key='search-bar'
            style={{ transformOrigin: 'center' }}
          >
            <div className='text'>搜索房源和体验</div>
            <div className='icon'>
              <IconSearchBar />
            </div>
          </motion.div>
        ) : (
          <motion.div
            className='search-detail'
            variants={searchDetailVariants}
            initial='initial'
            animate='animate'
            exit='exit'
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
