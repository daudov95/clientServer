const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}


module.exports = {
    target: 'web',
    // context: path.resolve(__dirname, 'src'),
    mode: mode,
    entry: {
        main: '@/index.js', // ./src/index.js
    },
    output:{
        // path: path.resolve(__dirname, 'build'),     
        // filename: "[name].js",
        // publicPath: '/build/',
        clean: true,
        assetModuleFilename: 'images/[hash][ext][query]' // [hash]
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
            '@styles': path.resolve(__dirname, 'src/assets/styles'),
            '@img': path.resolve(__dirname, 'src/assets/img'),
            '@public': path.resolve(__dirname, 'public'),
            '@': path.resolve(__dirname, 'src'),
        }
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: [
                    // compiles Less to CSS
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(ttf|woff|wof2|eot)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./public/bridge.js", to: "./" },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: './styles/[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}