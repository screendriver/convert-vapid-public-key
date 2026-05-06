import { baseConfig } from "@enormora/eslint-config-base";
import { mochaConfig } from "@enormora/eslint-config-mocha";
import { nodeConfig, nodeConfigFileConfig } from "@enormora/eslint-config-node";
import { typescriptConfig } from "@enormora/eslint-config-typescript";

export default [
	{
		ignores: ["target/**/*"]
	},
	baseConfig,
	nodeConfig,
	{
		...typescriptConfig,
		files: ["**/*.ts"]
	},
	{
		...mochaConfig,
		files: ["test/**/*.ts"]
	},
	{
		...nodeConfigFileConfig,
		files: ["eslint.config.js", "mocha.config.cjs"]
	},
	{
		files: ["**/*.ts"],
		rules: {
			"@stylistic/indent": ["error", "tab"],
			"@stylistic/no-tabs": "off",
			"@stylistic/quotes": ["error", "double"],
			"@typescript-eslint/no-magic-numbers": "off",
			"id-length": "off",
			"import/no-default-export": "off",
			"no-plusplus": "off",
			"unicorn/prefer-code-point": "off",
			"unicorn/prefer-string-replace-all": "off"
		}
	},
	{
		files: ["test/**/*.ts"],
		rules: {
			"@typescript-eslint/no-shadow": "off",
			"mocha/no-global-tests": "off",
			"mocha/no-mocha-arrows": "off"
		}
	},
	{
		files: ["eslint.config.js", "mocha.config.cjs"],
		rules: {
			"@stylistic/no-tabs": "off",
			"@stylistic/indent": "off",
			"@stylistic/quotes": "off",
			"@stylistic/comma-dangle": "off",
			"import/no-commonjs": "off",
			"import/extensions": "off",
			"no-undef": "off"
		}
	}
];
