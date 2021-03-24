const path = require('path')

module.exports = {
  webpack: {
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      'pages': path.resolve(__dirname, './src/pages'),
      'styles': path.resolve(__dirname, './src/styles'),
      'icons': path.resolve(__dirname, './src/icons')
    },
  },
}
