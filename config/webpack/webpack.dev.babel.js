import webpack from 'webpack';
import Jarvis from 'webpack-jarvis';

import paths from './paths';

module.exports = {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: paths.publicPath,
        chunkFilename: '[name].js'
    },
    performance: {
        hints: 'warning',
        maxAssetSize: 20000000,
        maxEntrypointSize: 8500000,
        assetFilter: assetFilename => {
            return (
                assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
            );
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        contentBase: paths.publicPath,
        compress: true,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new Jarvis({
            port: 1337
        }), 
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.PUBLIC_URL': ''
        })
    ]
};
