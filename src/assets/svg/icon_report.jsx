import React, { memo } from 'react';
import styleStrToObject from './utils';

const IconReport = memo(() => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      aria-hidden='true'
      role='presentation'
      focusable='false'
      style={styleStrToObject(
        'display: block; height: 16px; width: 16px; fill: currentcolor;'
      )}
    >
      <path d='M28 6H17V4a2 2 0 0 0-2-2H3v28h2V18h10v2a2 2 0 0 0 2 2h11.12a1 1 0 0 0 .84-1.28L27.04 14l1.92-6.72A1 1 0 0 0 28 6z'></path>
    </svg>
  );
});

export default IconReport;
