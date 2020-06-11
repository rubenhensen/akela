import sveltePreprocess from 'svelte-preprocess';

const postcssOptions = () => ({
	extensions: [".scss", ".sass"],
	extract: false,
	minimize: true,
	use: [
		[
			"sass",
			{
				includePaths: [
					"./src/theme",
					"./node_modules",
					// This is only needed because we're using a local module. :-/
					// Normally, you would not need this line.
					path.resolve(__dirname, "..", "node_modules")
				]
			}
		]
	]
});

module.exports = {
  preprocess: sveltePreprocess({
  postcss: postcssOptions,
	  babel: {
      presets: [
        [
          '@babel/preset-env',
          {
            loose: true,
            // No need for babel to resolve modules
            modules: false,
            targets: {
              // ! Very important. Target es6+
              esmodules: true,
            },
          },
        ],
      ],
    },
  }),
};
