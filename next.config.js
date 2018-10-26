/* eslint-disable */
const withLess = require('@zeit/next-less')

//fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => {}
}

module.exports = withLess({
    lessLoaderOptions: {
        javascriptEnabled: true,
    },
    
    webpack(config,{}) {
      // Further custom configuration here
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader'
      })
      return config
    }
  })
