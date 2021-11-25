module.exports = {
	webpack: (config, options) => {


		return config
	},

  images: {
    domains: ['medlink.com', 'www.educative.io'],
  },
	sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
