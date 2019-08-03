const merge = require('webpack-merge');
const commom = require('./ewbpack.common.js');

module.export = merge(common, {
    mode: 'production'
})