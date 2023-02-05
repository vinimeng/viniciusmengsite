const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const glob = require('glob');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    // bundling mode
    mode: 'production',

    // generate source map
    devtool: 'source-map',  

    // entry files
    entry: glob.sync('./src/ts/**/*.ts', { ignore: './src/ts/components/*' }).reduce((acc, item) => {
        let name = item.split('/').pop();
        name = name.split('.')[0];
        acc[name] = item;
        return acc;
    }, {}),

    // output bundles (location)
    output: {
        path: path.resolve( __dirname, './public/assets'),
        filename: 'js/[name].js',
    },

    // file resolutions
    resolve: {
        extensions: [ '.ts', '.js' ],
    },

    plugins: [new MiniCssExtractPlugin({
        filename: 'css/[name].css',
    })],

    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
            new CssMinimizerPlugin(),
        ],
    },
};
