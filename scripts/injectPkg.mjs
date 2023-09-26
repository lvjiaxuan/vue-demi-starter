import { URL, fileURLToPath } from 'node:url'
import fs from 'node:fs'


const root = fileURLToPath(new URL('./../', import.meta.url))

const pkgJson = {
  name: 'lib-name',
  exports: {
    '.': {
      types: './index.d.ts',
      require: './index.cjs',
      import: './index.mjs',
    },
  },
  main: './index.cjs',
  module: './index.mjs',
  types: './index.d.ts',
}

// eslint-disable-next-line no-magic-numbers
fs.writeFileSync(`${ root }/dist/package.json`, JSON.stringify(pkgJson, null, 2), { encoding: 'utf-8' })
