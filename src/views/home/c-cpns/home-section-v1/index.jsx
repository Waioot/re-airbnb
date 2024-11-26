import React, { memo } from 'react';

import { SectionV1Wrapper } from './style';
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';

const HomeSectionV1 = memo(({ title, roomList }) => {
  return (
    <SectionV1Wrapper>
      <SectionHeader title={title} />
      <SectionRooms roomList={roomList} />
    </SectionV1Wrapper>
  );
});

export default HomeSectionV1;
