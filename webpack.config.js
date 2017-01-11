var path = require('path');
module.exports = {
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
                  'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
              ]
            }
        ]
    }, devtool: 'source-map'
};
