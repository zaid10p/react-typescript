module.exports = {
  plugins: ['@typescript-eslint', 'prettier', 'jest'],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'eslint-config-prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    'linebreak-style': 0,
    'import/prefer-default-export': 'off',
    // in redux toolkit we directly assingn state params with new state
    'no-param-reassign': 'off',
    // props spreading will be needed in private route
    'react/jsx-props-no-spreading': 'off',
    // Use function hoisting to improve code readability
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        typedefs: true,
      },
    ],
    'import/no-cycle': [2, { maxDepth: 1 }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
