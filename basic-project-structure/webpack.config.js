const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: 'babel-loader',
  //     },
  //   ],
  // },
};
