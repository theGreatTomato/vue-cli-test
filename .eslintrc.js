module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": [1, 4],
    "no-var": 0,
    "linebreak-style": 0,
    "semi": [0, "always"]
  },
  parserOptions: {
    // parser: 'babel-eslint',
  },
};
