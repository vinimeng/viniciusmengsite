const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require('glob');

module.exports = {
    // bundling mode
    mode: 'development',

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
        path: path.resolve(__dirname, './public/assets'),
        filename: 'js/[name].js'
    },

    // file resolutions
    resolve: {
        extensions: ['.ts', '.js']
    },

    // plugins
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],

    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /(\.css)$/,
                include: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /(\.css)$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            }
        ]
    }
};
