const path = require('path')
const webpack = require('webpack')
const ESDynamicImportPlugin = require('@extscreen/es3-dynamic-import-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const watchPlugin = require('./webpack-watch.ts')
const vueCssLoader = require('css-loader')

const pkg = require('../package.json')
let cssLoader = '@hippy/vue-css-loader'
const QuickTVUI = require('unplugin-quicktvui/webpack')

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  watch: true,
  watchOptions: {
    aggregateTimeout: 1500
  },
  devServer: {
    // remote debug server address
    remote: {
      protocol: 'http',
      host: '127.0.0.1',
      port: 38989
    },
    // support inspect vue components, store and router, by default is disabled
    vueDevtools: false,
    // support debug multiple project with only one debug server, by default is set false.
    multiple: false,
    // by default hot and liveReload option are true, you could set only liveReload to true
    // to use live reload
    hot: false,
    liveReload: false,
    client: {
      overlay: false
    },
    devMiddleware: {
      writeToDisk: true
    }
  },
  entry: {
    index: ['@hippy/rejection-tracking-polyfill', path.resolve(pkg.main)]
  },
  output: {
    filename: 'index.bundle',
    // chunkFilename: '[name].[chunkhash].js',
    strictModuleExceptionHandling: true,
    path: path.resolve('./dist/dev/'),
    globalObject: '(0, eval)("this")',
    assetModuleFilename: '[hash][ext][query]'
  },
  plugins: [
    new VueLoaderPlugin(),
    new watchPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        HOST: JSON.stringify(process.env.DEV_HOST || '127.0.0.1'),
        PORT: JSON.stringify(process.env.DEV_PORT || 38989)
      },
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
      __PLATFORM__: null,
      __DEV__: true
    }),
    new ESDynamicImportPlugin(),
    new CleanWebpackPlugin(),
    QuickTVUI({
      useSource: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                // disable vue3 dom patch flag，because hippy do not support innerHTML
                hoistStatic: false,
                // whitespace handler, default is 'condense', it can be set 'preserve'
                whitespace: 'condense'
              }
            }
          }
        ]
      },
      {
        test:/\.(sc|c)ss$/,
        use: [
          cssLoader,
          {
            loader: 'sass-loader',
            options: {
              //自定义全局组件样式，打开此注释
              // additionalData: `@use "./src/styles/quicktvui/index.scss" as *;`,
            }
          }
        ]
      },
      {
        test: /\.t|js$/,
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              target: 'es2015'
            }
          }
        ]
      },
      /*{ //测试使用注释掉 后期放开
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
        generator: {
          outputPath: "assets/",
          publicPath: "assets/"
        }
      },*/
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: true
            // limit: 8192,
            // fallback: 'file-loader',
            // name: '[name].[ext]',
            // outputPath: 'assets/',
          }
        }]
      },
      {
        test: /\.(ts)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts'],
    alias: (() => {
      const aliases = {
        src: path.resolve('./src'),
        //使用别名把 quicktvui 指向本地编译目录 ---> 本地调试
        quicktvui: path.resolve('../dist/quicktvui')
      }
      return aliases
    })()
  }
}
