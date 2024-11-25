import React, { memo, useEffect } from 'react';

import { HomeWrapper } from './style';
import HomeBanner from './c-cpns/home-banner';
const Home = memo(() => {
  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
    </HomeWrapper>
  );
});

export default Home;
