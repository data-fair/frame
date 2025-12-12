import neostandard from 'neostandard'

export default [
  { ignores: ['dist/*', 'doc/*', 'lib/**/*.d.ts', 'lib/**/*.js'] },
  ...neostandard({ ts: true, noJsx: true }),
  {
    rules: {
      'no-undef': 'off' // taken care of by typescript
    }
  }
]
