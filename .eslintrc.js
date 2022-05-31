module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard',
		'plugin:react/jsx-runtime',
		'eslint-config-prettier',
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'no-unused-vars': 'warn',
		'react/jsx-no-undef': 'off',
		'no-trailing-spaces': 'off',
		'no-lone-blocks': 'warn',
		// 'eollone-last': 'off',
		'react/prop-types': 'warn',
		'no-void': 'off',
	},
};
