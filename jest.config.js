module.exports = {
  globalSetup: '<rootDir>/test.env.js',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: [
    '<rootDir>/node_modules',
    'node_modules',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/cypress/',
    '<rootDir>/dist/',
  ],
  testEnvironment: 'jsdom',
};
