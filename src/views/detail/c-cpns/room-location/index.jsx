import React, { memo } from 'react';
import { RoomLocationWrapper } from './style';
import MapComponent from '@/base-ui/map';

const RoomLocation = memo(() => {
  const apiKey = process.env.REACT_APP_GAODE_MAPS_API_KEY;
  const securityKey = process.env.REACT_APP_GAODE_MAPS_SECURITY_KEY;

  return (
    <RoomLocationWrapper>
      <div className='room-location-title'>房源位置</div>
      <div className='room-location-desc'>Heathsville, 弗吉尼亚州, 美国</div>
      <div className='room-location-map'>
        <MapComponent apiKey={apiKey} securityKey={securityKey} />
      </div>
    </RoomLocationWrapper>
  );
});

export default RoomLocation;
