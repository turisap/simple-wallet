import openBrowser from "react-dev-utils/openBrowser";

import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import DotenvWebpackPlugin from "dotenv-webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { DuplicatesPlugin } from "inspectpack/plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import type {
  Configuration as WebpackConfiguration,
  WebpackPluginInstance,
} from "webpack";
import webpack from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import type { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import WebpackBar from "webpackbar";

const DEMO_PORT = 8888;
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
};

type ArgV = {
  mode: Configuration["mode"];
};

type ConfigFn = (env: CustomEnv, argv: ArgV) => Configuration;

const config: ConfigFn = (env: CustomEnv, argv: ArgV) => {
  const __DEVELOPMENT__ = argv.mode === "development";
  const __PRODUCTION__ = argv.mode === "production";
  const __ANALISE__ = env.analise;

  process.env.NODE_ENV = argv.mode;
  process.env.BABEL_ENV = argv.mode;

  const devPlugins: WebpackPluginInstance[] = [];
  const prodPlugins: WebpackPluginInstance[] = [];
  const infraPlugins: WebpackPluginInstance[] = [];

  if (__DEVELOPMENT__) {
    devPlugins.push(new WebpackBar());
  }

  if (__PRODUCTION__) {
    prodPlugins.push(
      new DuplicatesPlugin({
        verbose: false,
      }),

      new ForkTsCheckerWebpackPlugin()
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
      port: DEMO_PORT,
      onAfterSetupMiddleware: () => {
        openBrowser(`http://localhost:${DEMO_PORT}`);
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
          type: "asset/resource",
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
      new DotenvWebpackPlugin({
        path: path.resolve(__dirname, ".env.development"),
      }),

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
