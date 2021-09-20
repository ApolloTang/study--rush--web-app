/* eslint-disable */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    '@myscope/eslint-config/src/eslint-configs/node.js',
    // '@rush-monorepo/eslint-config/typescript/react',
    // '@myscope/eslint-config/prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true, //<----- https://stackoverflow.com/a/64488474/3136861
    createDefaultProgram: true,
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 2015,
  },
  rules: {
     'no-console': 'error',
  },
};
