module.exports = {
  collectCoverageFrom: [
    'packages/**/*.(ts)',
    '!packages/react-grapnel-e2e-tests/**',
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  testRegex: 'tests/.*\\.test\\.ts$',
  testPathIgnorePatterns: ['/packages/react-grapnel-e2e-tests/'],
  preset: 'ts-jest',
}
