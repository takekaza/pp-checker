module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/prettier',
  ],
  rules: {
    // ここにカスタムルールを追加
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
