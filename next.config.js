const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
    // //optional
    // modifyVars: {},
    // // optional
    // lessVarsFilePath: './styles/antd-variables.less', //? doesn't need to specify the path if you already customize variable in global style.
    // //optional https://github.com/webpack-contrib/css-loader#object
    // cssLoaderOptions: {},

    // // Other Config Here...
    // future: {
    //     webpack5: true,
    // },

    // Custom Webpack Config
    webpack(config) {
        return config;
    },
});

// module.exports = {
//     future: {
//         webpack5: true,
//     },
// };
