import webpack from 'webpack'
import FriendlyErrors from 'friendly-errors-webpack-plugin'
import CleanPlugin from 'clean-webpack-plugin'
import HtmlPlugin from 'html-webpack-plugin'
import styles from './style-loaders'
import root from './context'

const plugins = [
  new FriendlyErrors(), // Pretty text in console
  new CleanPlugin('dist', { root }), // Clear output before building again
  new HtmlPlugin({ template: 'src/index.html' }), // Generate html
  new webpack.optimize.CommonsChunkPlugin({ // Extract infrequently changed modules
    names: ['vendor', 'runtime']
  })
]

if (process.env.NODE_ENV === 'production') {
  // In production
  plugins.push(
    styles.extract, // Extract styles
    new webpack.HashedModuleIdsPlugin() // Consistent module ids
  )
} else {
  // In development
  plugins.push(
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
    new webpack.NamedModulesPlugin() // Readable module names
  )
}

export default plugins
