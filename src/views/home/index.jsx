import React, { memo, useEffect } from 'react';
import { YRequest } from '@/services';
const Home = memo(() => {
  useEffect(() => {
    YRequest.get({ url: '/home/highscore' }).then(res => {
      console.log(res);
    });
  }, []);

  return <div>Home</div>;
});

export default Home;
