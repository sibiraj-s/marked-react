const { mergeConfig } = require('vite');
const pkgJSON = require('../package.json');

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  viteFinal: (config) => {
    return mergeConfig(config, {
      base: `/${pkgJSON.name}/`,
    });
  },
};
