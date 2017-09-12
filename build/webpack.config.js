import path from 'path'
import context from './context'
import plugins from './plugins'
import styles from './style-loaders'

const production = process.env.NODE_ENV === 'production'

export default {
  context,
  entry: {
    main: './src',
    vendor: [ 'vue', 'vuex' ]
  },
  output: {
    path: path.resolve(context, 'dist'),
    filename: production ? '[name].[chunkhash].js' : '[name].js'
  },

  resolve: { extensions: ['.js', '.json', '.vue'] },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue|html)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: { loaders: styles.loaders }
      },
      {
        test: /\.css$/,
        use: styles.loaders.css
      },
      {
        test: /\.scss$/,
        use: styles.loaders.scss
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          outputPath: 'assets',
          name: '[name].[hash].[ext]'
        }
      }
    ]
  },

  devtool: production
    ? 'cheap-module-source-map'
    : 'cheap-module-eval-source-map',

  plugins,
  stats: { modules: false },
  devServer: {
    contentBase: path.resolve(context, 'dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    quiet: true,
    hot: true
  }
}
