import { memo, useState, useCallback } from 'react';

import { HomeSectionV2Wrapper } from './style';
import SectionHeader from '@/components/section-header';
import SectionTabs from '@/components/section-tabs';
import SectionRooms from '@/components/section-rooms';
import SectionFooter from '@/components/section-footer';

// 首页-房屋组件-需要tab切换场景
const HomeSectionV2 = memo(({ infoData }) => {
  const inistalName = Object.keys(infoData?.dest_list)?.[0];
  const [tabName, setTabName] = useState(inistalName);
  // 数据转换
  const tabNames = infoData?.dest_address?.map(item => item.name);
  // 组件间通信
  const handleClickItem = useCallback((index, tabName) => {
    setTabName(tabName);
  }, []);
  return (
    <HomeSectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={handleClickItem} />
      <SectionRooms
        roomList={infoData?.dest_list?.[tabName]}
        itemWidth='33.33%'
      />
      <SectionFooter name={tabName} />
    </HomeSectionV2Wrapper>
  );
});

export default HomeSectionV2;
