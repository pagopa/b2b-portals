import { useEffect } from 'react';

const ScrollPaddingTopManager = () => {
  useEffect(() => {
    const header = document.querySelector('header');
    const html = document.querySelector('html');
    if (!header || !html) return;

    const updateHeight = () => {
      const height = header.getBoundingClientRect().height;
      html.style.scrollPaddingTop = `${height}px`;
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);

    return () => observer.disconnect();
  }, []);

  return null;
};

export default ScrollPaddingTopManager;
