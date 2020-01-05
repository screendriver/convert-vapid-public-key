module.exports = {
  spec: 'test/**/*.test.*',
  require: ['esm', 'ts-node/register/transpile-only'],
  extension: 'ts',
  ui: 'tdd',
  reporter: 'dot',
};
