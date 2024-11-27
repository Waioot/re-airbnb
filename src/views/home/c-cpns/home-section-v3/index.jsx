import { memo } from 'react';
import { HomeSectionV3Wrapper } from './style';
import SectionHeader from '@/components/section-header';
import RoomItem from '@/components/room-item';
import SectionFooter from '@/components/section-footer';
import ScrollView from '@/base-ui/scroll-view';
const HomeSectionV3 = memo(({ infoData }) => {
  return (
    <HomeSectionV3Wrapper>
      <SectionHeader title={infoData.title} />
      <div className='room-list'>
        <ScrollView>
          {infoData.list.map(item => {
            return <RoomItem key={item.id} itemWidth='20%' itemData={item} />;
          })}
        </ScrollView>
      </div>
      <SectionFooter name='plus' />
    </HomeSectionV3Wrapper>
  );
});

export default HomeSectionV3;
