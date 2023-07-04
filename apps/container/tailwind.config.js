const { join } = require('path');

const {
  createGlobPatternsForDependencies,
} = require('@nrwl/workspace/src/utilities/generate-globs');

/**
 * Generates a set of glob patterns based off the source root of the app and its dependencies
 * @param dirPath workspace relative directory path that will be used to infer the parent project and dependencies
 * @param fileGlobPattern pass a custom glob pattern to be used
 */
function createGlobPatternsForDependenciesLocal(
  dirPath,
  fileGlobPattern = '/**/!(*.stories|*.spec).{html,js,ts,jsx,tsx}'
) {
  try {
    return createGlobPatternsForDependencies(dirPath, fileGlobPattern);
  } catch {
    console.warn(
      '\n[createGlobPatternsForDependencies] WARNING: There was no ProjectGraph available to read from, returning an empty array of glob patterns\n'
    );
    return [];
  }
}

module.exports = {
  content: [
    // look for source files in the app folder
    join(__dirname, 'src/**/*.{html,ts,tsx,js,jsx}'),
    // but then also look for source files in all the libs that the app depends on
    ...createGlobPatternsForDependenciesLocal(__dirname),
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        12.4: '3.1rem',
      },
      height: {
        container2: 'calc(100vh - 6.5rem)',
        content: 'calc(100vh - 6.6rem)',
        'content-md': 'calc(100vh - 4.6rem)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
