const path = require('path');

module.exports = {
  entry: {
    app: [
        './src/index'
    ]
  },
  
  target: 'node',

  devtool: 'inline-source-map',
  
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', 'dist')
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
        { test: /\.tsx?$/, loader: "ts-loader" },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

}  