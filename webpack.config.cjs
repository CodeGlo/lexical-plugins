const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    clean: true,
    library: {
      type: "module",
    },
  },
  experiments: {
    outputModule: true,
  },
  stats: {
    errorDetails: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'expose-loader',
          options: {
            exposes: ['DraggableBlockPlugin'],
          },
        }, {
        loader: 'ts-loader'
        }]
        // use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],

  },

  resolve: {
    // extensions: ['.js', '.jsx', '.ts', '.tsx'],
    extensions: ['.jsx', '.js', '.ts', '.tsx', '.mjs', '.css'],
  },
};