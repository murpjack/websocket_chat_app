const error = "error";

module.exports = {
  extends: [
    "eslint:recommended"
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    "prefer-const": error,
  },
};
