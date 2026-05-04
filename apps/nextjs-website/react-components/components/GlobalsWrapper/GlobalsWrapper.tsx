import { GlobalsWrapperProps } from '@react-components/types';
import { Locale } from '@react-components/types/common/Common.types';
import { createContext } from 'react';

interface GlobalsType {
  locale: Locale;
}
export const GlobalsContext = createContext<GlobalsType>({ locale: 'it' });

export default function GlobalsWrapper({
  locale,
  children,
}: GlobalsWrapperProps) {
  return (
    <GlobalsContext.Provider value={{ locale }}>
      {children}
    </GlobalsContext.Provider>
  );
}
