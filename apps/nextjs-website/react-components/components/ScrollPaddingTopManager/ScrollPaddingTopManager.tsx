import { useEffect } from 'react';

const ScrollPaddingTopManager = () => {
  // ResizeObserver catches the header's height change when the user resizes from desktop to mobile (or viceversa)

  useEffect(() => {
    const header = document.querySelector('header');
    const html = document.querySelector('html');
    const main = document.querySelector('main');
    if (!header || !html || !main) return;
    const updateHeight = () => {
      const height = main.hasAttribute('inert')
        ? 0
        : `${header.getBoundingClientRect().height + 16}`;
      html.style.scrollPaddingTop = `${height}px`;
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);

    window.addEventListener('FORCE_HEADER_UPDATE', updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener('FORCE_HEADER_UPDATE', updateHeight);
    };
  }, []);

  return null;
};

export default ScrollPaddingTopManager;
