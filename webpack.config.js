const { resolve } = require('path');

module.exports = {
	entry: resolve('./script.js'),
    mode: 'development',
    watch: true,
    output: {
        path: resolve('./'),
		filename: 'script.min.js'
    }
}