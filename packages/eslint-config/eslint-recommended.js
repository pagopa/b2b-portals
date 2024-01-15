module.exports = {
  root: true,
  extends: [
    // Load common config
    "./eslint-config.js",
    // Load pagopa eslint config
    "@pagopa/eslint-config/recommended",
  ],
  "overrides": [
    {
      "files": [
        "**/__tests__/**/*.ts"
      ],
      "rules": {
        "functional/no-return-void": "off"
      }
    }
  ]
}
