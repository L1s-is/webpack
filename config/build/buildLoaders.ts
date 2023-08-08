import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/i,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [ "@babel/preset-env" ],
        plugins: [
          [ "i18next-extract", {
            nsSeparator: "~",
            locales: [ "ru", "en" ],
            /* keyAsDefaultValue: true, */
          } ],
          // […] your other plugins […]
        ],
      },
    },
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\.scss$/,
            localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: [ "@svgr/webpack" ],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  return [
    babelLoader,
    typescriptLoader,
    styleLoader,
    svgLoader,
    fileLoader,
  ];
}
