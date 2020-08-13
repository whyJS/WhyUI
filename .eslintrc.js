/*
 * @Description:
 * @Author: whyjs
 * @Date: 2020-08-13 13:16:16
 * @LastEditTime: 2020-08-13 15:14:21
 * @LastEditors: whyjs
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
