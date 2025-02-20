import upleveled from 'eslint-config-upleveled';
import globals from 'globals';

/** @type {import('@typescript-eslint/utils/ts-eslint').FlatConfig.ConfigArray} */
const config = [
  ...upleveled,
  {
    languageOptions: {
      globals: {
        ...globals.webextensions,
      },
    },
  },
];

export default config;
