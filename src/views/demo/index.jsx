import { memo, useState } from 'react';
import { DemoWrapper } from './style';
import Indicator from '@/base-ui/indicator';

const Demo = memo(() => {
  const names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleChangeClick(isNext = true) {
    let newIndex = isNext ? selectedIndex + 1 : selectedIndex - 1;
    if (newIndex < 0) {
      newIndex = names.length - 1;
    }
    if (newIndex >= names.length) {
      newIndex = 0;
    }
    setSelectedIndex(newIndex);
  }

  return (
    <DemoWrapper>
      <div className='control'>
        <button onClick={() => handleChangeClick(false)}>上一个</button>
        <button onClick={() => handleChangeClick(true)}>下一个</button>
      </div>
      <div className='list'>
        <Indicator selectedIndex={selectedIndex}>
          {names.map((item, index) => {
            return <button key={index}>{item}</button>;
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  );
});

export default Demo;
