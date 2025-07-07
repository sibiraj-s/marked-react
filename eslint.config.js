import pegasus from 'eslint-config-pegasus';
import storybook from 'eslint-plugin-storybook';

export default pegasus.tsConfig(
  pegasus.configs.default,
  pegasus.configs.browser,
  pegasus.configs.react,
  {
    files: ['**/*.ts', '**/*.tsx', '.storybook/**/*.ts'],
    extends: [pegasus.configs.react, ...pegasus.configs.typescript],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['scripts/**/*.js'],
    extends: [pegasus.configs.node],
  },
  {
    files: ['**/*.stories.@(js|jsx|ts|tsx)'],
    extends: [pegasus.configs.react, ...pegasus.configs.typescript, ...storybook.configs['flat/recommended']],
  },
  {
    ignores: ['dist/'],
  },
);
