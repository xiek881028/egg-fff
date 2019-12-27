const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    demo_spa: 'app/web/page/demo_spa/index.js',
    demo_home: 'app/web/page/demo_home/index.jsx',
    demo_details: 'app/web/page/demo_details/index.jsx',
  },
  module: {
    rules: [
      {
        scss: false,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:base64:10]',
                getLocalIdent: (context, localIdentName, localName) => {
                  const path = context._module.context;
                  if(/^((?!node_modules).)*(web){1}.*(components){1}.*$/.test(path)) {
                    return;
                  } else {
                    return localName;
                  }
                },
              },
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
          }, {
            loader: 'sass-resources-loader', // 全局scss变量插件
            options: {
              resources: path.join(__dirname, './app/web/styles/variable.scss')
            }
          }
        ]
      },
      {
        less: {
          options: {
            javascriptEnabled: true,
          },
        },
      },
    ],
  },
  plugins: [
    { extract: false },
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[name].[contenthash].css"
    }),
  ],
  alias: {
    '@root': '',
    '@src': 'app/web',
  },
};
