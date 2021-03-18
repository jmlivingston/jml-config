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

export default {
  input: path.join(path.resolve(), 'src/index.js'),
  output: {
    file: path.join(path.resolve(), 'lib/index.js'),
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [terser()],
}
