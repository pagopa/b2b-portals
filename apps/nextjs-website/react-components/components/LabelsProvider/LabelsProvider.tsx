import { LabelsProviderProps } from '@react-components/types';
import { createContext } from 'react';

export const LabelsContext = createContext<LabelsProviderProps>({
  externalLinkIconLabel: {
    default: 'Link esterno',
    targetBlank: 'Link esterno - Apre in un nuova finestra',
  },
});

export default function LabelsProvider({
  externalLinkIconLabel,
  children,
}: LabelsProviderProps & { children: JSX.Element }) {
  return (
    <LabelsContext.Provider value={{ externalLinkIconLabel }}>
      {children}
    </LabelsContext.Provider>
  );
}
