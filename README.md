# jml-config

Base configurations for JavaScript, React, and Prettier

## Installation

`npm i @jml/config`

> Note: Be sure to add any peer dependencies.

---

## Integration

### Vanilla JS Project

Add the following to the base of package.json or within an estlintrc.json

```json
"eslintConfig": {
    "extends": [
      "@jml/config/lintJs"
    ]
}
```

### React Project

Add the following to the base of package.json or within an estlintrc.json

```json
"eslintConfig": {
    "extends": [
      "@jml/config/lintReact"
    ]
}
```

### Prettier

Add the following to .prettierrc.js

```javascript
module.exports = {
  ...require('@jml/config/prettier'),
  semi: false,
}
```
