import pagopa from '@pagopa/eslint-config';

export default [
  ...pagopa,
  {
    ignores: ['apps/nextjs-website/**'],
  },
];
