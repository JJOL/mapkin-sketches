module.exports = {
  entry: './public/js/client/main/',
  output: {
    path: './public/js/client/bundle.js',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
	query: {
	  presets: ['es2015']
	}
      }
    ]
  }
}
