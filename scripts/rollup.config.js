import fs from 'fs'
import path from 'path'
import rimraf from 'rimraf'
import { terser } from 'rollup-plugin-terser'
import packageJson from '../package.json'

const buildDirectory = path.join(path.resolve(), 'lib')

function cleanDist() {
  rimraf.sync(buildDirectory)
  fs.mkdirSync(buildDirectory)
}

function createReadmePackageJson() {
  fs.copyFileSync(path.join(path.resolve(), 'README.md'), path.join(buildDirectory, 'README.md'))
  fs.copyFileSync(path.join(path.resolve(), 'README.md'), path.join(buildDirectory, 'README.md'))
  fs.writeFileSync(
    path.join(buildDirectory, 'package.json'),
    JSON.stringify(
      {
        name: '@jml/config',
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

cleanDist()

createReadmePackageJson()

const inputs = [
  'src/lintJs/eslint-config-js.js',
  'src/lintJs/eslint-config-react.js',
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
