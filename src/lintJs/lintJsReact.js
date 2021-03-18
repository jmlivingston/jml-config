import lintBase from './lintJsBase'

const lintJsReact = {
  extends: ['react-app'],
  rules: {
    ...lintBase.rules,
    'no-console': 1,
    'no-debugger': 1,
    'react/default-props-match-prop-types': 1,
    'react/no-unused-prop-types': 1,
    'react/prop-types': 1,
    'react/sort-prop-types': 1,
  },
}

export default lintJsReact
