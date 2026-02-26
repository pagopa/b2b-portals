import { useEffect } from 'react';

const ScrollPaddingTopManager = () => {
  // ResizeObserver catches the header's height change when the user resizes from desktop to mobile (or viceversa)

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
