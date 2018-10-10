/* eslint-disable */
const withCss = require('@zeit/next-css')
const withTypescript = require('@zeit/next-typescript')

//fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = () => {}
}

module.exports = withTypescript(withCss({
    webpack(config,{}) {
      // Further custom configuration here
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader'
      })
      config.module.rules.push({
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,use: 'url-loader?limit=100000' 
       })
      return config
    }
  }))
