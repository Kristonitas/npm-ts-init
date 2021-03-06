const config = {
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	env: {
		es6: true,
		browser: false,
		node: true
	},
	parserOptions: {
		ecmaVersion: 8,
		sourceType: "module",
		ecmaFeatures: {
			experimentalObjectRestSpread: true
		}
	},
	globals: {
		VERSION: true,
		DEVELOP: true
	},
	rules: {
		"no-console": 1,
		indent: [2, "tab"],
		"@typescript-eslint/indent": [2, "tab"],
		"no-mixed-spaces-and-tabs": 1
	}
};

module.exports = config;
