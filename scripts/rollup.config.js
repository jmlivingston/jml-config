import fs from 'fs-extra'
import path from 'path'
import { terser } from 'rollup-plugin-terser'
import packageJson from '../package.json'

const buildDirectory = path.join(path.resolve(), 'lib')

function cleanDist() {
  fs.removeSync(buildDirectory)
  fs.mkdirSync(buildDirectory)
}

function createReadmePackageJson() {
  // fs.copyFileSync(
  //   path.join(path.resolve(), 'package-lock.json'),
  //   path.join(buildDirectory, 'package-lock.json')
  // )
  fs.copyFileSync(path.join(path.resolve(), 'README.md'), path.join(buildDirectory, 'README.md'))
  fs.writeFileSync(
    path.join(buildDirectory, 'package.json'),
    JSON.stringify(
      {
        name: packageJson.name,
        description: packageJson.description,
        version: packageJson.version,
        author: packageJson.author,
        license: packageJson.license,
        repository: packageJson.repository,
        keywords: packageJson.keywords,
        dependencies: packageJson.dependencies,
        peerDependencies: packageJson.peerDependencies,
      },
      null,
      2
    )
  )
}

function copyGitHooks() {
  fs.copySync(
    path.join(path.resolve(), 'src/git-hooks'),
    path.join(path.resolve(), 'lib/git-hooks')
  )
}

cleanDist()

createReadmePackageJson()

copyGitHooks()

const inputs = [
  'src/lint-js/eslint-config-js.js',
  'src/lint-js/eslint-config-react.js',
  'src/prettier/prettier.js',
]

export default inputs.map((input) => ({
  input: path.join(path.resolve(), input),
  output: {
    exports: 'auto',
    format: 'cjs',
    sourcemap: true,
    dir: path.join(path.resolve(), 'lib'),
  },
  plugins: [terser()],
}))
