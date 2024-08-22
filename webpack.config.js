const path = require('path');
const fs = require('fs');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

require('dotenv').config({
	path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
});

// Helper function to generate entries
function generateEntries(directory) {
	const files = fs.readdirSync(directory);
	const entries = {};

	files.forEach((file) => {
		console.log(file);

		const name = path.parse(file).name;
		if (path.extname(file) == '.hbs') {
			entries[name] = path.join(directory, file);
		}
	});

	return entries;
}

// Set the directory path for pages
const pagesDirectory = path.join(__dirname, 'src/pages/');

module.exports = {
	target: 'web',
	mode: isDev ? 'development' : 'production',
	devtool: 'eval-cheap-source-map',
	output: {
		path: path.resolve(__dirname, 'build/'),
	},
	resolve: {
		alias: {
			'@fonts': path.join(__dirname, 'src/fonts'),
			'@images': path.join(__dirname, 'src/images'),
			'@scripts': path.join(__dirname, 'src/scripts'),
			'@styles': path.join(__dirname, 'src/styles'),
		},
		modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
	},
	plugins: [
		new HtmlBundlerPlugin({
			entry: 'src/pages/',
			// entry: generateEntries(pagesDirectory),
			data: 'src/data/global.json',
			preprocessor: 'handlebars',
			preprocessorOptions: {
				partials: ['src/partials/', 'src/pages/'],
				helpers: {
					pageData: function (context) {
						context = this;
						console.log('context: ', context);
					},
				},
			},
			js: {
				filename: 'js/[name].[contenthash:8].js',
			},
			css: {
				filename: 'css/[name].[contenthash:8].css',
			},
			// verbose: true,
		}),
		function () {
			console.log('NODE_ENV: ', process.env.NODE_ENV);
			console.log('isDev: ', isDev);
			console.log(
				'Resolved .env path: ',
				path.resolve(__dirname, `.env.${process.env.NODE_ENV}`)
			);
			console.log('BASE_URL: ', process.env.BASE_URL);
			console.log('entries: ', generateEntries(pagesDirectory));
		},
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				include: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.s?css/i,
				use: [
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					},
					'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
				type: 'asset/resource',
			},
		],
	},
	devServer: {
		port: 8000,
		open: false,
		static: path.resolve(__dirname, 'build'),
		watchFiles: {
			paths: ['src/**/*.*'],
			options: {
				usePolling: true,
			},
		},
		client: {
			logging: 'error',
		},
	},
};
