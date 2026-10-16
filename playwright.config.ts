import { defineConfig, devices } from '@playwright/test'

const FIXTURES_PORT = Number(process.env.FIXTURES_PORT ?? 5741)
const DOC_PORT = Number(process.env.DOC_PORT ?? 5742)

// only start the servers of the selected projects (--project=x or --project x, all by default)
const argv = process.argv.join(' ')
const selected = [...argv.matchAll(/--project[= ](\S+)/g)].map(m => m[1])
const runs = (project: string) => !selected.length || selected.includes(project)

export default defineConfig({
  testDir: './tests',
  outputDir: './tests/output',
  globalSetup: './tests/global-setup.ts',
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : 1,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  timeout: 15_000,
  expect: { timeout: 5_000 },

  use: {
    ...devices['Desktop Chrome'],
    trace: 'retain-on-failure'
  },

  projects: [
    {
      name: 'unit',
      testMatch: /.*\.unit\.spec\.ts/
    },
    {
      // minimal parent/child pages served by vite from tests/fixtures/, one behavior each
      name: 'e2e',
      testMatch: /.*\.e2e\.spec\.ts/,
      use: { baseURL: `http://127.0.0.1:${FIXTURES_PORT}` }
    },
    {
      // non-regression of the examples of the documentation site
      name: 'doc',
      testMatch: /.*\.doc\.spec\.ts/,
      // the dev server compiles each page on its first visit
      timeout: 60_000,
      expect: { timeout: 15_000 },
      use: { baseURL: `http://localhost:${DOC_PORT}` }
    }
  ],

  webServer: [
    runs('e2e') && {
      command: `vite -c tests/fixtures/vite.config.js --port ${FIXTURES_PORT} --strictPort`,
      url: `http://127.0.0.1:${FIXTURES_PORT}/tests/fixtures/parent.html`,
      reuseExistingServer: !process.env.CI
    },
    runs('doc') && {
      command: `npm --prefix doc run dev -- --port ${DOC_PORT}`,
      url: `http://localhost:${DOC_PORT}/`,
      reuseExistingServer: !process.env.CI,
      timeout: 120_000
    }
  ].filter(s => !!s)
})
