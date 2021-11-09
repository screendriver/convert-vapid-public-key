export default {
  files: ['test/**/*.test.*'],
  extensions: {
    ts: 'module',
  },
  nodeArguments: ['--loader=ts-node/esm'],
  environmentVariables: {
    TS_NODE_PROJECT: 'tsconfig.base.json',
  },
};
