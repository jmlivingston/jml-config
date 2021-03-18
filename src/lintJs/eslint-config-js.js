import eslintBase from './eslint-config-base'

const lintJs = {
  ...eslintBase,
  extends: ['eslint:recommended'],
}

export default lintJs
