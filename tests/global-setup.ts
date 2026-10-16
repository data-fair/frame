import { existsSync, readdirSync, rmSync, statSync } from 'node:fs'
import { join } from 'node:path'

// lib/**/*.js and lib/**/*.d.ts are build outputs (git ignored, `npm run build` recreates them).
// Imports like './url.js' resolve to them before the .ts sources, so a stale build would be tested.
// They are kept only if they are all up to date (a `tsc --watch` is running), else they are all removed:
// a fresh output that imports a removed stale one would not resolve.
export default function globalSetup () {
  const files = readdirSync('lib', { recursive: true, encoding: 'utf8' }).map(file => join('lib', file))
  const outputs = files.filter(file => file.endsWith('.js') || file.endsWith('.d.ts'))
  const sources = files.filter(file => file.endsWith('.ts') && !file.endsWith('.d.ts'))
  const upToDate = (output: string, source: string) => existsSync(output) && statSync(output).mtimeMs >= statSync(source).mtimeMs
  const fresh = sources.every(source => upToDate(source.replace(/\.ts$/, '.js'), source)) &&
    outputs.every(output => existsSync(output.replace(/(\.d\.ts|\.js)$/, '.ts')))
  if (!fresh) for (const output of outputs) rmSync(output)
}
