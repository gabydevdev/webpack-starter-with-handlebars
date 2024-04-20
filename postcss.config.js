const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
	syntax: "postcss-scss",
	plugins: [postcssPresetEnv()],
};
