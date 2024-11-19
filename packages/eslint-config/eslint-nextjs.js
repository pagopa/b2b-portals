const { rules } = require("./eslint-recommended");

module.exports = {
  root: true,
  extends: [
    // Load NextJS eslint rules
    "next/core-web-vitals",
  ],
  overrides: [{
    files: ["*"],
    rules: {
      "@next/next/no-img-element": "off"
    }
  }],
}
