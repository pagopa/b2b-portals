import { useEffect } from 'react';

const ScrollPaddingTopManager = () => {
  // The class ResizeObserver used in useEffect() checks in realtime the dimensions of an element (Header in this case).
  // This updates the value of scrollPaddingTop CSS property when Header height changes and also adds 16px
  // to the Header height for safe distance.

  useEffect(() => {
    const header = document.querySelector('header');
    const html = document.querySelector('html');
    if (!header || !html) return;

    const updateHeight = () => {
      const height = header.getBoundingClientRect().height;
      html.style.scrollPaddingTop = `${height + 16}px`;
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);

    return () => observer.disconnect();
  }, []);

  return null;
};

export default ScrollPaddingTopManager;
