import { LocaleProviderProps } from '@react-components/types';
import { createContext } from 'react';

export const LocaleContext = createContext<LocaleProviderProps>({
  labels: { externalLinkIconLabel: 'it' },
});

interface LocaleProviderPropsRC extends LocaleProviderProps {
  children: JSX.Element;
}

export default function LocaleProvider({
  labels,
  children,
}: LocaleProviderPropsRC) {
  return (
    <LocaleContext.Provider value={{ labels }}>
      {children}
    </LocaleContext.Provider>
  );
}
