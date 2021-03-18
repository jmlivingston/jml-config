# Custom Git Hooks

As .git file is not source controlled, you will need to use a new location for Git Hooks. In this example, `scripts/git-hooks` is used. Once you've decided where these should be, you will need to run the following script to ensure sees the directory.

```bash
git config core.hooksPath scripts/git-hooks
```

To ensure other users have the hooks installed, you can add this to package.json scripts object. Keep in mind, this will only run when they install packages.

```json
"scripts": {
    "preinstall": "git config core.hooksPath scripts/git-hooks"
}
```

Any new Git Hook files must be marked as executable. On MACOS you can run the following within the git hooks directory.

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
