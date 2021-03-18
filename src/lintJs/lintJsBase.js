const lintJsBase = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 1,
    'no-debugger': 1,
  },
}

export default lintJsBase
