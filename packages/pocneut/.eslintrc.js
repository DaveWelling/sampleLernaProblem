const { Neutrino } = require('neutrino');

module.exports = Neutrino()
  .use('.neutrinorc.js', {
    eslint: {
      rules: {
        "quotes": [
          2,
          "single",
          "avoid-escape"
        ],
        "no-console": 1,
        "camelcase": 1,
        "array-bracket-spacing": [
          1,
          "never"
        ],
        "space-in-parens": [
          1,
          "never"
        ],
        "no-debugger": 1,
        "no-var": 1,
        "semi": [
          2,
          "always"
        ],
        "no-trailing-spaces": 0,
        "eol-last": 0,
        "no-unused-vars": 1,
        "no-underscore-dangle": 0,
        "no-alert": 0,
        "no-lone-blocks": 0,
        "jsx-quotes": 1,
        "space-before-function-paren": ["error", "never"],
        "function-paren-newline": ["ignore", "always"],
        "comma-dangle": ["error", "never"]
      }
    }
  })
  .call('eslintrc');
