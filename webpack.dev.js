const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exoprt = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
});