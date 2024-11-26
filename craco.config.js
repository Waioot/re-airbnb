const path = require('path');

const CracoLessPlugin = require('craco-less');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],

  // webpack 配置
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
      utils: resolve('src/utils'),
    },
  },
};
