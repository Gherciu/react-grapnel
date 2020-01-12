module.exports = {
  collectCoverageFrom: [
    'packages/**/*.(ts|tsx)',
    '!packages/react-grapnel/**',
    '!packages/react-grapnel-utils/src/index.ts',
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  testRegex: 'tests/.*\\.test\\.(ts|tsx)$',
  preset: 'ts-jest',
}
