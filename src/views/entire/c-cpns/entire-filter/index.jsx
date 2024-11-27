import React, { memo, useState } from 'react';
import { EntireFilterWrapper } from './style';

import filterData from '@/assets/data/filter_data.json';

const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([]);

  function itemClickHandler(item) {
    const newItems = [...selectItems];
    if (newItems.includes(item)) {
      newItems.splice(newItems.indexOf(item), 1);
    } else {
      newItems.push(item);
    }
    setSelectItems(newItems);
  }

  return (
    <EntireFilterWrapper>
      <div className='filter'>
        {filterData.map((item, index) => {
          return (
            <div
              className={`item ${selectItems.includes(item) ? 'active' : ''}`}
              key={item}
              onClick={() => itemClickHandler(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </EntireFilterWrapper>
  );
});

export default EntireFilter;
