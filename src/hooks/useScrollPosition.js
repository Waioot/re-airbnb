import { useState, useEffect } from 'react';

export default function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollX(window.scrollX);
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition);
    };
  }, []);

  return { scrollX, scrollY };
}
