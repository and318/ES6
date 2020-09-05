const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader'
            }
        ]
    }
};