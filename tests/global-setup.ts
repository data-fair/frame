import { readdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'

// lib/**/*.js and lib/**/*.d.ts are build outputs (git ignored, `npm run build` recreates them).
// Imports like './url.js' resolve to them before the .ts sources, so a stale build would be tested.
export default function globalSetup () {
  for (const file of readdirSync('lib', { recursive: true, encoding: 'utf8' })) {
    if (file.endsWith('.js') || file.endsWith('.d.ts')) rmSync(join('lib', file))
  }
}
