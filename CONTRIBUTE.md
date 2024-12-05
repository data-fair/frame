# Contribute

Pull requests are welcome, just make sure that you discuss important changes in an issue beforehand, then follow the coding style and test all changes before submitting.

## Quality checks

This project uses [husky](https://typicode.github.io/husky/) to ensure quality of contributions in a pre-commit hook.

  - code source is linted using [eslint](https://eslint.org/), you can run the linter manually with `npm run lint`
  - commit messages are checked against [conventional rules](https://www.conventionalcommits.org/en/v1.0.0/)

## Development server

Run a local development server:

    cd doc
    npm install
    npm run dev

This simply opens the documentation site in a local web server that will watch your edits to the source code both of the library and of the documentation and its examples.