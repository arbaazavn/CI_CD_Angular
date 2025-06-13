import { defineConfig, globalIgnores } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores(["projects/**/*"]), {
    files: ["**/*.ts"],

    extends: compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
    ),

    languageOptions: {
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: ["tsconfig.json"],
            createDefaultProgram: true,
        },
    },

    rules: {
        "@typescript-eslint/no-unused-vars": ["error", {
            argsIgnorePattern: "^_",
        }],

        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "warn",

        "@angular-eslint/component-class-suffix": ["error", {
            suffixes: ["Component"],
        }],

        "@angular-eslint/directive-class-suffix": ["error", {
            suffixes: ["Directive"],
        }],

        "@angular-eslint/no-host-metadata-property": "off",
        eqeqeq: ["error", "always"],

        "no-console": ["warn", {
            allow: ["warn", "error"],
        }],

        "prefer-const": "error",
    },
}, {
    files: ["**/*.html"],
    extends: compat.extends("plugin:@angular-eslint/template/recommended"),

    rules: {
        "@angular-eslint/template/no-any": "warn",
        "@angular-eslint/template/eqeqeq": "error",
        "@angular-eslint/template/banana-in-box": "error",
    },
}]);
