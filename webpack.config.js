var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: '#inline-source-map',
  entry: {
    'docs.js': './docs/index.jsx'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name]',
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loaders: ['babel']},
    ],
  },
  resolve : {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};