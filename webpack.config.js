const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}
console.log(mode + ' mode');

module.exports = {
    mode: mode,
    plugins: [ 
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    module: {
        rules:[]
    }
};