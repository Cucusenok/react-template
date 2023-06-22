console.log('=====================', process.env.NODE_ENV);
module.exports = {
  env: {
    jest: true,
    es2021: true,
    browser: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  plugins: ['import', 'react', 'react-hooks', '@typescript-eslint'],
  ignorePatterns: [
    'README.MD',
    'graphql.tsx',
    'BadCode.tsx',
    'fragment-masking.ts',
    '*.stories.ts',
    'setupTests.ts',
    'index.tsx',
    '*.json',
  ],
  settings: {
    node: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    alias: {
      map: [
        ['@components/*', './components/*'],
        ['@gql/*', './gql/*'],
      ],
    },
  },
  extends: [
    // "standard-with-typescript",
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'airbnb',
    'prettier',
  ],
  rules: {
    'no-var': 'warn',
    'import/no-unresolved': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        js: 'never',
        '': 'never',
        tsx: 'never',
        jsx: 'never',
      },
    ],
  },
};
