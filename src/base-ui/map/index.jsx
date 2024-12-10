import React, { memo } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapComponent = memo(props => {
  // 地图容器样式
  const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '8px',
  };

  // 设置地图中心点坐标
  const center = {
    lat: 37.7749, // 替换为实际位置的纬度
    lng: -122.4194, // 替换为实际位置的经度
  };

  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        {/* 可以在这里添加标记等其他组件 */}
      </GoogleMap>
    </LoadScript>
  );
});

export default MapComponent;
