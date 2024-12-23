import React, { memo } from 'react';
import styleStrToObject from './utils';

const IconShare = memo(() => {
  return (
    <svg
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      role='presentation'
      focusable='false'
      style={styleStrToObject(
        'display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible;'
      )}
    >
      <path
        d='m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289'
        fill='none'
      ></path>
    </svg>
  );
});

export default IconShare;
