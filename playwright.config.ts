import { defineConfig, devices } from '@playwright/test'

const FIXTURES_PORT = Number(process.env.FIXTURES_PORT ?? 5741)

// the documentation site has its own config (playwright.doc.config.ts), its dev server is heavy
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
    }
  ],

  webServer: {
    command: `npx vite -c tests/fixtures/vite.config.js --port ${FIXTURES_PORT} --strictPort`,
    url: `http://127.0.0.1:${FIXTURES_PORT}/tests/fixtures/parent.html`,
    // vite starts in a second, a reused server could serve the lib of another checkout
    reuseExistingServer: false
  }
})
