module.exports = (api) => {
  const __DEVELOPMENT__ = api.env("development");

  // @TODO the order of plugins and presets in this config resulted in a build error
  return {
    presets: [
      "@babel/preset-env",
      "@babel/preset-typescript",
      "@babel/preset-react",
    ],
    plugins: [
      "babel-plugin-transform-typescript-metadata",
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      ["@babel/plugin-proposal-private-methods", { loose: true }],
      ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
      [
        "babel-plugin-styled-components",
        {
          displayName: __DEVELOPMENT__,
          fileName: __DEVELOPMENT__,
          namespace: __DEVELOPMENT__ ? "simple-wallet" : undefined,
        },
      ],
    ],
  };
};
