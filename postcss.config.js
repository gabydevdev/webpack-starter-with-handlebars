/* This JavaScript code is configuring PostCSS to use the `postcss-preset-env` plugin. */
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
	syntax: "postcss-scss",
	plugins: [postcssPresetEnv()],
};
