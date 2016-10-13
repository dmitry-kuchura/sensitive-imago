module.exports = {
    entry: "./src/js/init.js",
    output: {
        path:'../Media/js/',
        publicPath: '/Media/js/',
        filename: "bundle.js",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel"
            }
        ]
    },
    resolve:{
        modulesDirectories:[
            './src/js/modules',
            './src/js/vendor'
        ]
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
    },
    devtool: "cheap-module-inline-source-map",
    watch: true
};