var path = require('path');
var values = require('postcss-modules-values');

module.exports = {
  devServer: {
    host: 'localhost',
    port: '8080', // 默认webpack是用 8080 端口起的，通过port可以配成其他的端口。
    hot: true,  // 熱加載。
    inline: true, // 设置为true，代码有变化，浏览器端刷新。
    historyApiFallback: true,
  },
  entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'src/main.js')],
  output: {
    filename: './dist/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.css$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      }
    ]
  }, 
  devtool: 'source-map',
  postcss: [
    values
  ]
};
