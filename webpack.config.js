const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'web-component.js', 
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }
};
