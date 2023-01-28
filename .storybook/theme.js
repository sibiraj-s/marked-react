import { create } from '@storybook/theming';

// @todo: theme doesn't work
// see https://github.com/storybookjs/storybook/issues/20704
export default create({
  base: 'light',
  brandTitle: 'Marked React',
  brandUrl: 'https://github.com/sibiraj-s/marked-react',
  brandTarget: '_blank',
});
