import { Language } from '@react-components/types/Footer/Footer.types';
import icons from './icons';
import Image from 'next/image';

interface FundedByNextGenerationEUProps {
  title: string;
  language: Language['id'];
}

export const FundedByNextGenerationEU = ({
  title,
  language,
}: FundedByNextGenerationEUProps): JSX.Element => (
  <Image
    src={icons[language]}
    alt={title}
    aria-label={title}
    width={180}
    height={42}
    style={{
      display: 'inline-block',
      userSelect: 'none',
      pointerEvents: 'none',
    }}
  />
);
