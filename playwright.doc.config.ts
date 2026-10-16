import { defineConfig } from '@playwright/test'
import base from './playwright.config.ts'

const DOC_PORT = Number(process.env.DOC_PORT ?? 5742)
// served under a base path like the published site (https://data-fair.github.io/frame/main/),
// the examples build their src and sync-path from it
const DOC_URL = `http://localhost:${DOC_PORT}/frame/main/`

// non-regression of the examples of the documentation site
export default defineConfig({
  ...base,
  outputDir: './tests/output/doc',
  fullyParallel: true,
  projects: [{
    name: 'doc',
    testMatch: /.*\.doc\.spec\.ts/,
    // the dev server compiles each page on its first visit
    timeout: 60_000,
    expect: { timeout: 15_000 },
    use: { baseURL: DOC_URL }
  }],
  webServer: {
    command: `npm --prefix doc run dev -- --port ${DOC_PORT}`,
    env: { ...process.env, TARGET: DOC_URL } as Record<string, string>,
    url: DOC_URL,
    // the cold start of nuxt is long: a server started from this checkout can be reused locally
    reuseExistingServer: !process.env.CI,
    timeout: 120_000
  }
})
