const { join } = require('path');

module.exports = {
  plugins: {
    'postcss-import': {},

    // if using .css files, and we want to use css nesting
    'tailwindcss/nesting': {},

    // pass in the local tailwind config
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
  },
};
