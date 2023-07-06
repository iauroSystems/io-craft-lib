const {createGlobPatternsForDependencies} = require("@nrwl/react/tailwind");

module.exports = {
  // purge: createGlobPatternsForDependencies(__dirname),
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        12.4: "3.1rem",
      },
    },
    colors: {
      customgrey: "red",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
