module.exports = {
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "node": true
  },
  "extends": ["eslint:recommended"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "rules": {
    "no-console": "off",
    "semi": ["warn", "never"],
    "indent": ["warn", 2]
  }
}
