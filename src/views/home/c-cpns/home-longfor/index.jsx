import { memo } from 'react';

import { LongforWrapper } from './style';
import SectionHeader from '@/components/section-header';
import LongforItem from '@/components/longfor-item';
import ScrollView from '@/base-ui/scroll-view';

const HomeLongfor = memo(({ infoData }) => {
  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className='longfor-list'>
        <ScrollView>
          {infoData.list.map((item, index) => {
            return <LongforItem key={index} itemData={item} />;
          })}
        </ScrollView>
      </div>
    </LongforWrapper>
  );
});

export default HomeLongfor;
