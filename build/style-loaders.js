import ExtractTextPlugin from 'extract-text-webpack-plugin'

const extract = new ExtractTextPlugin('[name].[contenthash:20].css')
const loaders = {}

loaders.css = ['vue-style-loader', 'css-loader', 'postcss-loader']
loaders.scss = loaders.css.concat([
  'sass-loader',
  {
    loader: 'sass-resources-loader',
    options: { resources: './src/styles/_variables.scss' }
  }
])

if (process.env.NODE_ENV === 'production') {
  for (const lang in loaders) {
    loaders[lang].shift() // Remove vue-style-loader
    loaders[lang] = extract.extract(loaders[lang]) // Extract styles
  }
}

export default { loaders, extract }
