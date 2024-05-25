import { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFiles: ['./jest.setup.js'],

  moduleDirectories: ['node_modules', '<rootDir>'],
};

export default jestConfig;
