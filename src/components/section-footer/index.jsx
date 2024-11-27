import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionFooterWrapper } from './style';
import IconMoreArrow from '@/assets/svg/icon-more-arrow';

const SectionFooter = memo(({ name }) => {
  let showMessage = name ? `查看更多${name}房源` : '显示全部';

  const navigate = useNavigate();
  function handleModeClick() {
    // 跳转到对应房源列表
    navigate(`/entire`);
  }

  return (
    <SectionFooterWrapper color={name ? '#008489' : '#000'}>
      <div className='info' onClick={handleModeClick}>
        <span className='text'>{showMessage}</span>
        <IconMoreArrow />
      </div>
    </SectionFooterWrapper>
  );
});

export default SectionFooter;
