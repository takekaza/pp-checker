module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  globals: {
    age: false,
    // setAge: false,
  },
  rules: {
    // ここにカスタムルールを追加
    "no-undef": "off",
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};
