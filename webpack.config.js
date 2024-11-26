const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js'],

        alias: {
            '@bots': path.resolve(__dirname, 'src/bots'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@consts': path.resolve(__dirname, 'src/consts'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@services': path.resolve(__dirname, 'src/services'),
            '@storage': path.resolve(__dirname, 'src/storage'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|webp|gif|svg|mp4)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[hash].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            base: '/',
        }),
    ],
    devtool: 'source-map',
    devServer: {
        static: './dist',
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
};
