import globals from "globals";
import ts_plugin from "@typescript-eslint/eslint-plugin";
import js_plugin from "@eslint/js";

import typescriptParser from "@typescript-eslint/parser";
import sveltePlugin from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";

const ts_rules_disabled = Object.fromEntries(
	Object.keys(ts_plugin.rules).map((rule) => [
		`@typescript-eslint/${rule}`,
		"off"
	])
);
const js_rules_disabled = Object.fromEntries(
	Object.keys(js_plugin.configs.all.rules).map((rule) => [rule, "off"])
);

const js_rules = {
	...js_rules_disabled,
	"no-console": ["error", { allow: ["warn", "error", "debug"] }],
	"no-constant-condition": "error",
	"no-dupe-args": "error",
	"no-extra-boolean-cast": "error",
	"no-unexpected-multiline": "error",
	"no-unreachable": "error",
	"valid-jsdoc": "error",
	"array-callback-return": "error",
	complexity: "error",
	"no-else-return": "error",
	"no-useless-return": "error",
	"no-undef": "error"
};

const ts_rules = {
	...ts_rules_disabled,
	"@typescript-eslint/adjacent-overload-signatures": "error",
	"@typescript-eslint/explicit-function-return-type": [
		"error",
		{ allowExpressions: true }
	],
	"@typescript-eslint/consistent-type-exports": "error",
	"@typescript-eslint/ban-types": "error",
	"@typescript-eslint/array-type": "error",
	"@typescript-eslint/no-inferrable-types": "error"
};

const { browser, es2021, node } = globals;

export default [
	{
		ignores: [
			".svelte-kit/**/*",
			"**/node_modules/**",
			"**/dist/**",
			"**/.config/*",
			"**/*.spec.ts",
			"**/*.test.ts",
			"**/*.node-test.ts",
			"js/app/test/**/*",
			"**/*vite.config.ts",
			"**/_website/**/*",
			"**/_spaces-test/**/*"
		]
	},
	{
		files: ["**/*.js", "**/*.cjs"],
		languageOptions: {
			globals: {
				...browser,
				...es2021,
				...node
			}
		},

		plugins: {
			"eslint:recommended": js_plugin
		},
		rules: js_rules
	},

	{
		files: ["**/*.ts"],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				project: "./tsconfig.json",
				extraFileExtensions: [".svelte"]
			},
			globals: {
				...browser,
				...es2021,
				...node
			}
		},

		plugins: {
			"@typescript-eslint": ts_plugin,
			"eslint:recommended": js_plugin
		},
		rules: {
			...ts_rules,
			...js_rules,
			"no-undef": "off"
		}
	},
	{
		files: ["**/client/js/**"],
		languageOptions: {
			parserOptions: {
				project: "./client/js/tsconfig.json"
			}
		}
	},
	{
		files: ["**/*.svelte"],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: typescriptParser,
				project: "./tsconfig.json",
				extraFileExtensions: [".svelte"]
			},
			globals: {
				...browser,
				...es2021
			}
		},
		plugins: {
			svelte: sveltePlugin,
			"@typescript-eslint": ts_plugin,
			"eslint:recommended": js_plugin
		},
		rules: {
			...ts_rules,
			...js_rules,
			...sveltePlugin.configs.recommended.rules,
			"svelte/no-at-html-tags": "off",
			"no-undef": "off"
		}
	}
];
