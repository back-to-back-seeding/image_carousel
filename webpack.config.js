const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/client/index.jsx'),
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
