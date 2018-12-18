const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HashOutput = require('webpack-plugin-hash-output');

module.exports = {
    // development mode
    mode: 'development',
    context: resolve(__dirname, 'source/js'),
    // watches for changes in files
    watch: true,
    // entry point of the application
    entry: [
        'webpack/hot/only-dev-server',
        './modularity-my-pages.tsx'
    ],
    // where to output the bundle.js and what its name will be
    // the [name] is not defined by us, its magic
    output: {
        filename: '[name].[hash].js',
        path: resolve(__dirname, 'dist'), 
        publicPath: '/'
    },
    // chooses the style of source mapping to enhance debugging
    // process. These values can affect build and rebuild
    // speed dramatically see for more information :
    // https://webpack.js.org/configuration/devtool/
    devtool: 'inline-source-map',
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    // settings for dev server if you are running npm start
    // and not npm run build
    devServer: {
        stats: {
            // warnings in the console
            warnings: false
        },
        port: '8080',
        hot: true,
        noInfo: false,
        // with this no errors will be printed
        quiet: false,
        // where the server looks for the codebase
        contentBase: resolve(__dirname, 'source/js'),
        publicPath: '/'
    },
    module: {
        rules: [            
            { 
                // Loader for typescript files.
                test: /\.(ts|tsx)?$/, 
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            compilerOptions: {
                              module: 'es2015'
                            }
                        },
                    }, 
                ],
                exclude: [resolve(__dirname, "node_modules")],                
            },
            {
                // Compiles scss to css.
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" },
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }            
        ]
    },
    plugins: [
        // removed everything from the dist folder before the output is put in there
        new CleanWebpackPlugin(['dist'], {
            watch: true
        }),
        // gives the bundle a hash for uniqueness
        new HashOutput(),
        // manages the manifest, currently only sets the name for it
        new ManifestPlugin({
            fileName: 'rev-manifest.json',
        }),
        // extracts css-file to hashed variant.
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].css"
          }),
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new HtmlWebpackPlugin({template: resolve(__dirname, 'source/js/index.html')}),
        // inject <script> in html file. 
    ],
};