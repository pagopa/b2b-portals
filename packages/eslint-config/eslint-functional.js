module.exports = {
  root: true,
  plugins: ['functional'],
  rules: {
    // No exceptions
    'functional/no-promise-reject': 'error',
    // No mutations
    'functional/immutable-data': 'error',
    'functional/no-let': 'error',
    // No other paradigms
    'functional/no-this-expressions': 'error',
    // No statements
    'functional/no-expression-statements': 'error',
    'functional/no-loop-statements': 'error',
    // Stylistic
    'functional/prefer-property-signatures': 'warn',
    'functional/prefer-tacit': 'warn',
    // Vanilla
    'no-var': 'error',
    'no-param-reassign': 'error',
  },
  overrides: [
    {
      // Exclude also react components, allowing us to use setState()
      files: ['**/*.tsx', '**/*.ts'],
      rules: {
        'functional/no-expression-statements': 'off',
      },
    },
    {
      // Exclude tests from this rule, allowing us to use describe() and it()
      files: ['**/__tests__/**/*.ts'],
      rules: {
        'functional/no-expression-statements': 'off',
      },
    },
    {
      // Exclude Strapi's index file, allowing us to use lifecycle functions
      files: ['src/index.ts'],
      rules: {
        'functional/no-expression-statements': 'off',
        'functional/no-return-void': 'off',
        'functional/no-try-statements': 'off',
      },
    },
  ],
};
