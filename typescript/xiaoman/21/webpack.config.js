const { Configuration } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWepackPlugin = require('html-webpack-plugin')
const path = require('path')
/**
 * @type {Configuration}
 */
const config = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[chunkhash].js',
    clean: true
  },
  stats: 'errors-only',
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWepackPlugin({
      template: './index.html'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        moment: {
          name: 'moment',
          test: /[\\/]node_modules[\\/]moment[\\/]/,
          chunks: 'all'
        },
        common: {
          name: 'common',
          chunks: 'all',
          minChunks: 2
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader', //处理ts文件
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] //从右向左解析
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  }
}

module.exports = config
