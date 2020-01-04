const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/examples/ghpages.ts',
  output: {
    filename: 'snowflakes-examples.bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.umd.json',
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/examples/ghpages.html' })],
  devtool: 'source-map',
};
