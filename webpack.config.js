/**
 * Created by anyuan on 17-7-24.
 */
var path = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        path:'./dist',
        publicPath:'dist/',
        filename: 'build.js'
    },

    devServer: {
     historyApiFallback: true,
     hot: false,
     inline: true,
     grogress: true
     },
    module: {
        loaders: [
            //转化ES6语法
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },


            //解析.vue文件
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            //图片转化，小于8K自动转化为base64的编码
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192'
            },
            {
            test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*/,
                loader: 'url-loader?name=[name].[md5:hash:hex:7].[ext]'
            }
        ]
    },
    vue:{
        loaders:{
            js: 'babel'
        }
    },
    resolve: {
        // require时省略的扩展名，如：require('app') 不需要app.js
        extensions: [ '','.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components'),
            vue: 'vue/dist/vue.js'
        }
    }
}