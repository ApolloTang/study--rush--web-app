/* xxxxeslint-disable */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    '@myscope/eslint-config/myconfig',
    // '@myscope/eslint-config/typescript/react',
    // '@myscope/eslint-config/prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 2015,
  },
  rules: {
     'no-console': 'error',
  },
};
