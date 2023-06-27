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
  globals: {
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true,
  },
  ignorePatterns: [
    'README.MD',
    'graphql.tsx',
    'BadCode.tsx',
    'fragment-masking.ts',
    '*.stories.ts',
    'setupTests.ts',
    'index.tsx',
    '*.json',
    'build/*',
    '*.gql',
    '*.css',
    '*.mdx',
    '*.stories.ts',
    '*.html',
  ],
  settings: {
    node: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    alias: {
      map: [
        ['@components/*', './components/*'],
        ['@gql/*', './gql/*'],
        ['@common/*', './common/*'],
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
    'no-else-return': 'off',
    'import/no-unresolved': 'off',
    'arrow-body-style': 'off',
    'no-shadow': 'off',
    'object-shorthand': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'import/order': 'off',
    camelcase: 'off',
    'guard-for-in': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-explicit-any': ['error'],
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
