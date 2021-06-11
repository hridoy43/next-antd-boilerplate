const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  // //optional
  // modifyVars: {},
  // // optional
  // lessVarsFilePath: './styles/antd-variables.less', //? doesn't need to specify the path if you already customized the variables in global style.
  // //optional https://github.com/webpack-contrib/css-loader#object
  // cssLoaderOptions: {},

  // Custom Webpack Config
  webpack(config) {
    return config;
  },

  // NextFuture
  future: {
      webpack5: true, 
  },
});
