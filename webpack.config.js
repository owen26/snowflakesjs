const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/examples/examples.ts',
  output: {
    filename: 'examples.js',
    path: path.resolve(__dirname, 'dist', 'examples'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/examples/index.html' })],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist/examples',
  },
};
