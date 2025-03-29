import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname)

export default {
  entry: [
    './src/index.js',
  ],
  resolve: {
    modules: [
      'src',
      'node_modules',
    ],
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            // Babel configuration is in babel.config.js because jest requires it to be there.
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            url: false,
          },
        }, 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            url: false,
          },
        }],
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'main.js',
  },
};
