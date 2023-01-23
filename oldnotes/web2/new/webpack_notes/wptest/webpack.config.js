const path = require('path')  //node自带的path模块
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',  //设置环境
    entry: {
        common: './src/js/common.js',
        index: ['./src/js/index.js', './src/js/index2.js'],
        list: './src/js/list.js',
        detail: './src/js/detail.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'  //这里意思是根据entry{}里的键名来生成打包后的文件名
    },
    // 将output生成的js文件关联到src目录的index.html文件中，打包后dist目录中自动生成一个index.html文件
    // 这个html文件引用两个js文件，一个是打包后的common.js另一个是打包后的index.js
    plugins: [
        new HtmlWebpackPlugin({
            title:'首页',  //html页面的title标签里要对应<%= htmlWebpackPlugin.options.title %>
            template: "./src/index.html",  //模板的位置
            filename: 'index.html',  //打包后的文件名
            inject: true,
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['common', 'index']  //打包后需要连接的js文件名
        }),
        new HtmlWebpackPlugin({
            title:'列表页',
            template: "./src/list.html",
            filename: 'list.html',
            inject: true,
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['common', 'list']
        }),
        new HtmlWebpackPlugin({
            title:'详情页',
            template: "./src/detail.html",
            filename: 'detail.html',
            inject: true,
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['common', 'detail']
        })
    ]
}
