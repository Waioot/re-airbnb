import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { CenterWrapper } from './style';

import IconSearchBar from '@/assets/svg/icon_search_bar';
import SearchTabs from './c-cpns/saerch-tabs';
import SearchSections from './c-cpns/saerch-sections';
import SearchTitles from '@/assets/data/search_titles.json';

const HeaderCenter = memo(({ isSearch, searchClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = SearchTitles.map(item => item.title);

  // 简化动画配置，只保留必要的位移和透明度
  const searchBarVariants = {
    initial: {
      opacity: 0,
      x: 20,
      scale: 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      x: -20,
      scale: 0,
    },
  };

  const searchDetailVariants = {
    initial: {
      opacity: 0,
      x: -20,
      scale: 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      x: 20,
      scale: 0,
    },
  };

  // 统一的过渡配置
  const transition = {
    duration: 0.3,
    ease: 'easeInOut',
  };

  return (
    <CenterWrapper>
      {!isSearch ? (
        <motion.div
          className='search-bar'
          onClick={searchClick}
          variants={searchBarVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          key='search-bar'
          transition={transition}
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
          transition={transition}
          style={{ transformOrigin: 'center' }}
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
    </CenterWrapper>
  );
});

export default HeaderCenter;
