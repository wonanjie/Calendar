const { override, addLessLoader, fixBabelImports } = require("customize-cra");

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      relativeUrls: false,
      modifyVars: { "@primary-color": "#A80000" },
    },
  }),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  })
);
