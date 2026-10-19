# Contribute

Pull requests are welcome, just make sure that you discuss important changes in an issue beforehand, then follow the coding style and test all changes before submitting.

## Quality checks

This project uses [husky](https://typicode.github.io/husky/) to ensure quality of contributions in a pre-commit hook.

  - code source is linted using [eslint](https://eslint.org/), you can run the linter manually with `npm run lint`
  - commit messages are checked against [conventional rules](https://www.conventionalcommits.org/en/v1.0.0/)
  - unit and browser tests run before each push, the whole suite (with the documentation examples) runs in the CI of pull requests

## Tests

Tests use [Playwright](https://playwright.dev/):

  - `unit` project (`tests/*.unit.spec.ts`): pure functions like the computation of URLs in `lib/utils/`
  - `e2e` project (`tests/*.e2e.spec.ts`): one behavior per test, with minimal parent and child pages from `tests/fixtures/` served by vite (the parent on `127.0.0.1`, `localhost` gives a cross-origin child), and the bundles of `dist/`
  - `doc` project (`tests/*.doc.spec.ts`, own config `playwright.doc.config.ts`): non-regression of the examples of the documentation site, served by its dev server under the base path of the published site

Commands:

    npx playwright install chromium
    npm --prefix doc install   # for the doc tests
    npm test                   # all of them, also run by prepublishOnly
    npm run test:unit
    npm run test:e2e
    npm run test:doc
    npx playwright test        # unit and e2e, also run before each push

Only one run at a time in a checkout: each run empties `tests/output/`. A local doc dev server is reused by the doc tests, it must be the one of this checkout.

A test that reproduces a bug not fixed yet calls `knownBug('description')`: it is expected to fail and the run stays green. Run `SHOW_KNOWN_BUGS=1 npm run test:e2e` to see their actual errors. When fixing a bug, remove the `knownBug` call of its test.

Tests always run on the typescript sources: the compiled `lib/**/*.js` and `lib/**/*.d.ts` are removed before each run unless they are all up to date (`tsc --watch` of the dev environment), `npm run build` recreates them.

## Development server

Run a local development server:

    cd doc
    npm install
    npm run dev

This simply opens the documentation site in a local web server that will watch your edits to the source code both of the library and of the documentation and its examples.