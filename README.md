# jml-config

Base configurations for JavaScript, React, and Prettier

## Installation

`npm i jml-config -D`

> Note: Be sure to add any peer dependencies.

---

## Integration

### Vanilla JavaScript Project

Add the following to the base of package.json or within an estlintrc.json

```json
"eslintConfig": {
    "extends": [
      "./node_modules/jml-config/eslint-config-js"
    ]
}
```

### React Project

Add the following to the base of package.json or within an estlintrc.json

```json
"eslintConfig": {
    "extends": [
      "./node_modules/jml-config/eslint-config-react"
    ]
}
```

### Prettier

Add the following to package.json or .prettierrc.js

```javascript
"prettier": "./node_modules/jml-config/prettier"
```

### Git Hooks

Run the following script to ensure Git sees the directory.

```bash
git config core.hooksPath ./node_modules/jml-config/git-hooks
```

To ensure other users have the hooks installed, you can add this to package.json scripts object. Keep in mind, this will only run when they install packages.

```json
"scripts": {
    "preinstall": "git config core.hooksPath scripts/git-hooks"
}
```

### Customing Git Hooks

Any new Git Hook files added to this repo must be marked as executable. On MACOS you can run the following within the git hooks directory.

```bash
chmod +x prepare-commit-msg
```

> Note: If you prefer to use shell files, Git includes these in all instantiated repositories under: `.git/hooks`

---

## Other Resources

- [Customizing Git - Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)
- [Using javaScript in your git hooks](https://medium.com/@Sergeon/using-javascript-in-your-git-hooks-f0ce09477334)
- [git prepare-commit-msg with node.js](https://www.ipreferjim.com/2013/04/git-prepare-commit-msg-with-node-js/)
- [node-commit-msg](https://github.com/clns/node-commit-msg)
