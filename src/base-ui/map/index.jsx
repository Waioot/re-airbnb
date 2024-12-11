import { useEffect, useRef, memo } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';
import { MapWrapper } from './style';

// 在组件外部定义配置
const MAP_CONFIG = {
  viewMode: '3D',
  zoom: 11,
  center: [116.397428, 39.90923],
  showBuildingBlock: true,
};

const MapComponent = memo(({ apiKey, securityKey }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    window._AMapSecurityConfig = {
      securityJsCode: securityKey,
    };
    AMapLoader.load({
      key: apiKey,
      version: '2.0',
      plugins: ['AMap.Scale'],
    })
      .then(AMap => {
        mapRef.current = new AMap.Map('container', MAP_CONFIG);
      })
      .catch(e => {
        console.log(e);
      });

    return () => {
      mapRef.current?.destroy();
    };
  }, []);

  return (
    <MapWrapper>
      <div id='container' style={{ height: '480px' }}></div>
    </MapWrapper>
  );
});

export default MapComponent;
