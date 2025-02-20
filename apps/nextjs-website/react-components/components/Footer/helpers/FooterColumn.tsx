import { Link, Stack, Typography } from '@mui/material';
import { hrefNoOp } from '../Footer.helpers';
import { LogoPagoPACompany } from '../assets/LogoPagoPACompany';
import { FooterColumnProps } from '../../../types/Footer/Footer.types';

export const FooterColumn = ({
  data,
  companyLink,
  icons,
}: FooterColumnProps) => (
  <Stack spacing={2} display='flex' alignItems={{ xs: 'center', sm: 'start' }}>
    {data.title && <Typography variant='overline'>{data.title}</Typography>}

    {companyLink && (
      <Link
        aria-label={companyLink.ariaLabel}
        href={companyLink.href ?? hrefNoOp}
        sx={{ display: 'inline-flex' }}
        {...(companyLink.href?.startsWith('https') && { target: '_blank' })}
      >
        <LogoPagoPACompany />
      </Link>
    )}

    {icons && (
      <Stack
        aria-label='i nostri social'
        spacing={{ xs: 3, sm: 1.5, lg: 3 }}
        direction='row'
        component='ul'
        alignItems={{ xs: 'center', sm: 'start' }}
        sx={{ padding: 0, mt: 0.5, listStyle: 'none' }}
      >
        {icons.map(({ iconURL, href = hrefNoOp, ariaLabel }, i) => (
          <li key={i}>
            <Link
              href={href}
              aria-label={ariaLabel}
              {...(href.startsWith('https') && { target: '_blank' })}
            >
              <img
                src={iconURL}
                alt={ariaLabel || 'Social Icon'}
                width={30}
                height={30}
              />
            </Link>
          </li>
        ))}
      </Stack>
    )}

    <Stack
      component='ul'
      alignItems={{ xs: 'center', sm: 'start' }}
      textAlign={{ xs: 'center', sm: 'left' }}
      sx={{ padding: 0, listStyle: 'none' }}
    >
      {data.links.map(
        ({ href, label, ariaLabel, showOneTrustPreferencies }, i) => (
          <li key={i}>
            <Link
              aria-label={ariaLabel}
              component='a'
              underline='none'
              color='text.primary'
              sx={{ display: 'inline-block', py: 0.5, cursor: 'pointer' }}
              variant='subtitle2'
              {...(href.startsWith('https') && { target: '_blank' })}
              {...(showOneTrustPreferencies
                ? {
                    onClick: () => window.OneTrust.ToggleInfoDisplay(),
                  }
                : {
                    href,
                  })}
            >
              {label}
            </Link>
          </li>
        ),
      )}
    </Stack>
  </Stack>
);
