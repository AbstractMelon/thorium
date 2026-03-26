const isTest = String(process.env.NODE_ENV) === "test";

module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    isTest ? "react-app" : null,
    [
      "@babel/preset-typescript",
      {
        isTsx: true,
        allExtensions: false,
      },
    ],
  ].filter(Boolean),
  plugins: [
    "@emotion/babel-plugin",
    "transform-node-env-inline",
    "import-glob",
    "@babel/plugin-transform-class-properties",
    "macros",
    "@babel/plugin-transform-optional-chaining",
    "@babel/plugin-transform-nullish-coalescing-operator",
  ],
};
