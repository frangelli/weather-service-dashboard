var path = require("path");

module.exports = {
  devtool: "source-map",
  entry: './src/main.js',
  output: {
    path: './dist',
    publicPath: "/dist/",
    filename: 'bundle.js',
    sourceMapFilename: "./bundle.js.map"
  },
  devServer: {
    inline: true,
    contentBase: './',
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: 'file'
      },
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./styles")]
  }
}
