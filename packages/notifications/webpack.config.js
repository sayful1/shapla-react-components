const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');
const combineMediaQuery = require('postcss-combine-media-query');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = (env, argv) => {
  let isDev = argv.mode !== 'production',
    name = argv.name ? argv.name : 'index';

  let plugins = [];

  plugins.push(new MiniCssExtractPlugin({
    filename: `./${name}.css`
  }));

  if (isDev) {
    plugins.push(new HtmlWebpackPlugin({
      template: '../../public/index.html'
    }));
  }

  const config = {
    // entry: path.join(__dirname, 'example', 'main.js'),
    output: {
      // path: path.resolve(__dirname, 'dist'),
      filename: isDev ? `${name}.js` : `${name}.min.js`,
      libraryTarget: 'umd'
    },
    "devtool": isDev ? 'source-map' : false,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/i,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ],
              plugins: [
                ['@babel/plugin-proposal-class-properties', {'loose': true}],
                ['@babel/plugin-proposal-private-methods', {'loose': true}],
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-transform-modules-umd',
                '@babel/plugin-transform-modules-commonjs'
              ]
            }
          }
        },
        {
          test: /\.(sass|scss|css)$/i,
          use: [
            {
              loader: isDev ? "style-loader" : MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: isDev,
                importLoaders: 1
              }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: isDev,
                postcssOptions: {
                  plugins: [
                    ['postcss-preset-env'],
                    combineMediaQuery(),
                  ],
                },
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: isDev,
              },
            }
          ]
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: '../fonts',
              },
            },
          ],
        },
        {
          test: /\.(png|je?pg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192, // 8KB
                outputPath: '../images',
              },
            },
          ],
        },
        {
          test: /\.svg$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10240, // 10KB
                outputPath: '../images',
                generator: (content) => svgToMiniDataURI(content.toString()),
              },
            },
          ],
        }
      ]
    },
    optimization: {
      minimizer: [
        new TerserPlugin(),
        new OptimizeCSSAssetsPlugin()
      ]
    },
    resolve: {
      modules: [
        path.resolve('./node_modules'),
      ],
      extensions: ['.jsx', '.js']
    },
    plugins: plugins
  }

  if (!isDev) {
    config.externals = [nodeExternals()]
  }

  return config;
};
