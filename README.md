# jml-config

Base configurations for JavaScript, React, and Prettier

## Installation

`npm i @jml/config -D`

> Note: Be sure to add any peer dependencies.

---

## Integration

### Vanilla JavaScript Project

Add the following to the base of package.json or within an estlintrc.json

```json
"eslintConfig": {
    "extends": [
      "./node_modules/@jml/config/eslint-config-js"
    ]
}
```

### React Project

Add the following to the base of package.json or within an estlintrc.json

```json
"eslintConfig": {
    "extends": [
      "./node_modules/@jml/config/eslint-config-react"
    ]
}
```

### Prettier

Add the following to package.json or .prettierrc.js

```javascript
"prettier": "./node_modules/@jml/config/prettier"
```
