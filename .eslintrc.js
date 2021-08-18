module.exports = {
  env : {
    browser : true,
    es2021  : true
  },
  extends : [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions : {
    ecmaFeatures : {
      jsx : true
    },
    ecmaVersion : 12,
    sourceType  : 'module'
  },
  plugins : [
    'react'
  ],
  rules : {
    'key-spacing' : [
      'error',
      {
        beforeColon : true,
        afterColon  : true,
        align       : 'colon'
      }
    ],
    'no-unused-vars' : 'off',
    semi             : [
      'error',
      'always'
    ],
    quotes : [
      'warn',
      'single',
      {
        avoidEscape           : true,
        allowTemplateLiterals : true
      }
    ],
    'object-curly-spacing' : [
      'warn',
      'always'
    ],
    'template-curly-spacing' : [
      'warn',
      'always'
    ],
    'react/jsx-curly-spacing' : [
      1,
      'always'
    ],
    'max-len' : [
      'warn',
      {
        code : 120
      }
    ],
    'eol-last' : [
      'warn',
      'always'
    ],
    'comma-dangle' : [
      'error',
      'never'
    ],
    'react/prop-types' : 0
  }
};
