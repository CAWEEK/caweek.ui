const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const { config } = require('process');

const resolvePath = (_path) => path.join(process.cwd(), _path);

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-actions'],
	framework: '@storybook/react',
	core: {
		builder: 'webpack5',
	},
	typescript: { reactDocgen: false },

	webpackFinal: (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			'@emotion/core': resolvePath('node_modules/@emotion/react'),
			'@emotion/styled': resolvePath('node_modules/@emotion/styled'),
			'emotion-theming': resolvePath('node_modules/@emotion/react'),
		};
		config.resolve.plugins = config.resolve.plugins || [];
		config.resolve.plugins.push(
			new TsconfigPathsPlugin({
				configFile: path.resolve(__dirname, '../tsconfig.json'),
			})
		);
		return config;
	},
};
