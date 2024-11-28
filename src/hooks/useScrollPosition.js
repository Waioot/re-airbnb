import { useState, useEffect } from 'react';
import { throttle } from 'underscore';

export default function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // 引入节流
    const updatePosition = throttle(() => {
      setScrollX(window.scrollX);
      setScrollY(window.scrollY);
    }, 100);
    window.addEventListener('scroll', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition);
    };
  }, []);

  return { scrollX, scrollY };
}
