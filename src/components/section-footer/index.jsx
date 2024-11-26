import { memo } from 'react';
import { SectionFooterWrapper } from './style';
import IconMoreArrow from '@/assets/svg/icon-more-arrow';

const SectionFooter = memo(({ name }) => {
  let showMessage = name ? `查看更多${name}房源` : '显示全部';
  return (
    <SectionFooterWrapper color={name ? '#008489' : '#000'}>
      <div className='info'>
        <span className='text'>{showMessage}</span>
        <IconMoreArrow />
      </div>
    </SectionFooterWrapper>
  );
});

export default SectionFooter;
