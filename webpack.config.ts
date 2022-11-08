import openBrowser from "react-dev-utils/openBrowser";

import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { DuplicatesPlugin } from "inspectpack/plugin";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import type {
  Configuration as WebpackConfiguration,
  WebpackPluginInstance,
} from "webpack";
import webpack from "webpack";
import type { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import WebpackBar from "webpackbar";

const DEMO_PORT = 8888;
const PUBLIC_PATH = path.join(__dirname, "public");
const __APP_TITLE__ = "Simple Wallet";

interface Configuration
  extends WebpackConfiguration,
    WebpackDevServerConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

type CustomEnv = {
  testing: boolean;
  name: string;
  analise: boolean;
};

type ArgV = {
  mode: Configuration["mode"];
};

type ConfigFn = (env: CustomEnv, argv: ArgV) => Configuration;

const config: ConfigFn = (env: CustomEnv, argv: ArgV) => {
  const __DEVELOPMENT__ = argv.mode === "development";
  const __PRODUCTION__ = argv.mode === "production";

  process.env.NODE_ENV = argv.mode;
  process.env.BABEL_ENV = argv.mode;

  const devPlugins: WebpackPluginInstance[] = [];
  const prodPlugins: WebpackPluginInstance[] = [];

  if (__DEVELOPMENT__) {
    devPlugins.push(new WebpackBar());
  }

  if (__PRODUCTION__) {
    prodPlugins.push(
      new DuplicatesPlugin({
        verbose: false,
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
    },

    devtool: __PRODUCTION__ ? "nosources-source-map" : "eval-source-map",

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
          use: ["style-loader", "css-loader"],
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
    ],
  };
};

module.exports = config;