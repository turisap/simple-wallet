import openBrowser from "react-dev-utils/openBrowser";

import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import DotenvWebpackPlugin from "dotenv-webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { DuplicatesPlugin } from "inspectpack/plugin";
import type { LogLevelDesc } from "loglevel";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import type {
  Configuration as WebpackConfiguration,
  WebpackPluginInstance,
} from "webpack";
import webpack, { DefinePlugin } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import type { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import WebpackBar from "webpackbar";

const APP_PORT = 8888;
const PUBLIC_PATH = path.join(__dirname, "public");
const SOURCE_PATH = path.resolve(__dirname, "src");
const __APP_TITLE__ = "Simple Wallet";

interface Configuration
  extends WebpackConfiguration,
    WebpackDevServerConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

type CustomEnv = {
  testing: boolean;
  analise: boolean;
  loglevel: LogLevelDesc;
};

type ArgV = {
  mode: Configuration["mode"];
};

type ConfigFn = (env: CustomEnv, argv: ArgV) => Configuration;

const config: ConfigFn = (env: CustomEnv, argv: ArgV) => {
  const __DEVELOPMENT__ = argv.mode === "development";
  const __PRODUCTION__ = argv.mode === "production";
  const __LOGLEVEL__ = env.loglevel;
  const __ANALISE__ = env.analise;

  process.env.NODE_ENV = argv.mode;
  process.env.BABEL_ENV = argv.mode;

  const devPlugins: WebpackPluginInstance[] = [];
  const prodPlugins: WebpackPluginInstance[] = [];
  const infraPlugins: WebpackPluginInstance[] = [];

  if (__DEVELOPMENT__) {
    devPlugins.push(
      new WebpackBar(),

      new DotenvWebpackPlugin({
        path: path.resolve(__dirname, ".env.development"),
      })
    );
  }

  if (__PRODUCTION__) {
    prodPlugins.push(
      new DuplicatesPlugin({
        verbose: false,
      }),

      new ForkTsCheckerWebpackPlugin(),

      new DefinePlugin({
        "process.env": {
          GOOGLE_TRACKING_ID: JSON.stringify(process.env.GOOGLE_TRACKING_ID),
          REMOTE_CONFIG_API_KEY: JSON.stringify(
            process.env.REMOTE_CONFIG_API_KEY
          ),
          REMOTE_CONFIG_APP_ID: JSON.stringify(
            process.env.REMOTE_CONFIG_APP_ID
          ),
          BASE_NAME: JSON.stringify(process.env.BASE_NAME),
        },
      })
    );
  }

  if (__ANALISE__) {
    infraPlugins.push(
      new BundleAnalyzerPlugin({
        defaultSizes: "gzip",
      })
    );
  }

  return {
    bail: __PRODUCTION__,

    mode: argv.mode,

    performance: {
      hints: __PRODUCTION__ ? "warning" : false,
    },

    entry: path.resolve(__dirname, "/src/index.tsx"),

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".css"],

      alias: {
        "@components": path.resolve(SOURCE_PATH, "components"),
        "@stores": path.resolve(SOURCE_PATH, "stores"),
        "@pages": path.resolve(SOURCE_PATH, "pages"),
        "@typings": path.resolve(SOURCE_PATH, "typings"),
        "@styled": path.resolve(SOURCE_PATH, "styled"),
        "@utils": path.resolve(SOURCE_PATH, "utils"),
        "@nft": path.resolve(SOURCE_PATH, "nft"),
        "@assets": path.resolve(SOURCE_PATH, "assets"),
      },
    },

    devtool: __PRODUCTION__ ? false : "eval-source-map",

    devServer: {
      static: {
        directory: PUBLIC_PATH,
      },
      client: {
        overlay: false,
        logging: "error",
      },
      historyApiFallback: true,
      compress: true,
      hot: true,
      port: APP_PORT,
      onAfterSetupMiddleware: () => {
        openBrowser(`http://localhost:${APP_PORT}`);
      },
    },

    stats: "normal",

    optimization: {
      minimize: __PRODUCTION__,

      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
        // @TODO check how it works for prod builds
        new CssMinimizerPlugin(),
      ],
    },

    output: {
      crossOriginLoading: "anonymous",
      path: path.resolve(__dirname, "build"),
      filename: __DEVELOPMENT__
        ? "[name].[contenthash].js"
        : "[contenthash].js",
      chunkFilename: __DEVELOPMENT__
        ? "[id]-[contenthash].chunk.js"
        : "[contenthash].chunk.js",
      assetModuleFilename: "[name]-[contenthash][ext]",
    },

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            // @TODO check how it works for prod builds
            __DEVELOPMENT__ ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
          ],
        },
        {
          test: /.(png)$/,
          type: "asset/inline",
        },
        {
          test: /-icon\.svg$/,
          use: [
            {
              loader: "svg-sprite-loader",
            },
            {
              loader: "svgo-loader",
            },
          ],
        },
        {
          test: /\.(ts|js)x?$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
            },
          ],
        },
      ],
    },

    experiments: {
      topLevelAwait: true,
    },

    plugins: [
      // @TODO check how it works for prod builds
      new MiniCssExtractPlugin({
        filename: __PRODUCTION__ ? "[name]-[contenthash].css" : "[name].css",
        chunkFilename: "[id].css",
        ignoreOrder: true,
      }),

      new NodePolyfillPlugin(),

      new CleanWebpackPlugin(),

      new webpack.DefinePlugin({
        __DEVELOPMENT__: JSON.stringify(__DEVELOPMENT__),
        __PRODUCTION__: JSON.stringify(__PRODUCTION__),
        __APP_TITLE__: JSON.stringify(__APP_TITLE__),
        __LOGLEVEL__: JSON.stringify(__LOGLEVEL__),
      }),

      new HtmlWebpackPlugin({
        title: `${__APP_TITLE__}`,
        template: path.join(PUBLIC_PATH, "/index.html"),
        templateParameters: {
          PUBLIC_PATH,
        },
      }),

      ...devPlugins,

      ...prodPlugins,

      ...infraPlugins,
    ],
  };
};

module.exports = config;
