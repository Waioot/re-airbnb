import { useEffect } from 'react';

export default function useClosePopup(
  openIndicator,
  setOpenIndicator,
  className
) {
  // 点击其他地方关闭日期选择器
  useEffect(() => {
    const handleClickOutside = event => {
      const target = document.querySelector(`.${className}`);

      if (openIndicator && target) {
        if (!target.contains(event.target)) {
          setOpenIndicator(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [openIndicator, setOpenIndicator, className]);
}
