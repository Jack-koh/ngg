const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  mode: 'production',
  optimization: {
    splitChunks: { chunks: 'all', minSize: 3000 },
  },
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: [path.resolve(__dirname, './public/font')],
        use: [{ loader: 'file-loader', options: { name: '[name].[ext]' } }],
      },
      {
        test: /\.(png|jpg|mp4)$/,
        test: /\.(png|jpg|mp4)$/,
        include: [path.resolve(__dirname, './public/img')],
        use: [{ loader: 'file-loader', options: { name: '[name].[ext]' } }],
        // use: [
        //   {
        //     loader: 'file-loader',
        //     // path: 파일 경로 폴더 생성, name: 파일이름, ext: 확장자 이름
        //     options: {
        //       name: '[name].[ext]',
        //       outputPath: 'images',
        //     },
        //   },
        // ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'resolve-url-loader',
            options: {
              debug: true,
              root: path.join(__dirname, './public'),
              absolute: true,
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader'],
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.ts'],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }), // css 파일 생성(link rel 방식) 밑의 HtmlWebpackPlugin 이 자동으로 임포트
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      title: 'National geographic',
      template: 'src/index.hbs',
      description: 'National geographic',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', path.join(process.cwd(), 'build/**/*')],
    }),
  ],
};
