const path = require('path')
const webpack = require('webpack')
const FriendlyErrors = require('friendly-errors-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },

  resolve: {
    extensions: ['.js', '.json', '.vue']
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue|html)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': ['vue-style-loader', 'css-loader', 'sass-loader',
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: path.resolve(__dirname, 'src/styles/variables.scss')
                }
              }
            ]
          }
        }
      },
      {
        enforce: 'pre',
        test: /\.scss$/,
        loader: 'sass-loader'
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new FriendlyErrors()
  ],

  devtool: 'cheap-module-eval-source-map',
  stats: {
    modules: false
  },
  devServer: {
    quiet: true,
    hot: true
  }
}
