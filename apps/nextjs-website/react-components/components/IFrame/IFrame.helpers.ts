export const calculateIFrameHeight = (iframe: HTMLIFrameElement): string => {
  const scrollHeight = iframe.contentDocument?.body?.scrollHeight;
  return `${(scrollHeight ?? 0) + 16}px`;
};
