'use client';

import Typography from '@mui/material/Typography';
import { RedirectSection } from '@/lib/fetch/types/PageSection';
import type { Locale } from '@/lib/fetch/siteWideSEO';

type RedirectStrapiWithLocalize = RedirectSection & {
  locale: Locale;
};
const localizedTexts: Record<
  Locale,
  { intro: string; linkIntro: string; linkLabel: string }
> = {
  it: {
    intro: 'Verrai reindirizzato automaticamente.',
    linkIntro: 'Se non succede, ',
    linkLabel: 'apri direttamente la pagina.',
  },
  en: {
    intro: 'You will be redirected automatically.',
    linkIntro: 'If nothing happens, ',
    linkLabel: 'open the destination page.',
  },
  fr: {
    intro: 'Vous allez être redirigé automatiquement.',
    linkIntro: 'Si rien ne se passe, ',
    linkLabel: 'ouvrez la page directement.',
  },
  de: {
    intro: 'Du wirst automatisch weitergeleitet.',
    linkIntro: 'Falls nichts passiert, ',
    linkLabel: 'öffne die Seite direkt.',
  },
  sl: {
    intro: 'Samodejno boste preusmerjeni.',
    linkIntro: 'Če se nič ne zgodi, ',
    linkLabel: 'odprite stran ročno.',
  },
};
const Redirect = ({ redirectURL, locale }: RedirectStrapiWithLocalize) => {
  const texts = localizedTexts[locale];
  return (
    <>
      <Typography variant='body2' sx={{ py: 2, px: 2 }}>
        {texts.intro} {texts.linkIntro}
        <a href={redirectURL}>{texts.linkLabel}</a>
      </Typography>
    </>
  );
};

export default Redirect;
