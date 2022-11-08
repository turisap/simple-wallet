module.exports = (api) => {
  const __DEVELOPMENT__ = api.env("development");

  return {
    plugins: [
      [
        "babel-plugin-styled-components",
        {
          displayName: __DEVELOPMENT__,
          fileName: __DEVELOPMENT__,
          namespace: __DEVELOPMENT__ ? "simple-wallet" : undefined,
        },
      ],
    ],
    presets: [
      "@babel/preset-react",
      "@babel/preset-typescript",
      "@babel/preset-env",
    ],
  };
};
