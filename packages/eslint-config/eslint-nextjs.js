const { rules } = require('./eslint-recommended');

module.exports = {
  root: true,
  extends: [
    // Load NextJS eslint rules
    'next/core-web-vitals',
  ],
  overrides: [
    {
      files: ['*'],
      rules: {
        '@next/next/no-img-element': 'off',
        'react/jsx-key': 'warn',
        'react/no-unescaped-entities': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'prettier/prettier': 'error',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-empty-function': 'error',
      },
    },
  ],
};
