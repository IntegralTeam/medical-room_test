module.exports = {
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  rules: {
    'react/jsx-one-expression-per-line': 0,
    'react/require-default-props': 0,
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'ignore', ':': 'ignore' } }],
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'import/no-extraneous-dependencies': 0,
    'prettier/prettier': 0,
    'react/static-property-placement': 0,
    'import/no-named-as-default-member': 0,
    'import/no-cycle': 0,
    semi: 2,
    'comma-dangle': 2,
  },
  overrides: [
    {
      files: ['src/store/**'],
      rules: {
        'import/prefer-default-export': 0,
      },
    },
    {
      files: ['flow-typed/**'],
      rules: {
        'flowtype/no-types-missing-file-annotation': 0,
        quotes: 0,
        'flowtype/generic-spacing': 0,
      },
    },
  ],
  env: {
    browser: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  plugins: ['react', 'flowtype', 'import', 'react-hooks', 'jest', 'prettier'],
};
