import util from 'node:util';

import prompts from 'prompts';
import ghpages from 'gh-pages';
import pico from 'picocolors';

const publishAsync = util.promisify(ghpages.publish);
const publishDir = 'demo/build';

const ghPagesOptions = {
  branch: 'gh-pages',
  message: `Update ${new Date().toISOString()}`,
  dotfiles: true,
};

const questions = [
  {
    name: 'publish',
    type: 'confirm',
    message: `Do You want to publish the '${pico.cyan('build')}' directory to '${pico.cyan(ghPagesOptions.branch)}' branch?`,
  },
];

const publish = async () => {
  try {
    if (process.env.CI) {
      prompts.inject([true]);
    }

    const answers = await prompts(questions);

    if (!answers.publish) {
      return;
    }

    await publishAsync(publishDir, ghPagesOptions);
    console.log(pico.green(`\nBuild published successfully to '${pico.cyan('gh-pages')}'\n`));
  } catch (err) {
    console.log(pico.red('Unable to publish the build. Error:'), err);
  }
};

publish();
