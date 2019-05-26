module.exports = {
  "parser": "@typescript-eslint/parser",
  "env": {
    "es6": true,
    "node": true
  },
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "project": "./tsconfig.json",
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "semi": "off",
    "@typescript-eslint/semi": ["warn", "never"],

    "indent": "off",
    "@typescript-eslint/indent": ["warn", 2],

    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": "error"
  },
  "overrides": [
    {
      "files": ["*.js"],
      "rules": {
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ]
}
