/*
let page = {}
const event_id = process.argv[3] // 获取build后面的参数确定执行哪个文件
let path = require('path')
// const entry = path.resolve(__dirname, 'src', 'views', event_id.toString(), 'index.js')
console.log(event_id)
const objectProject = {
    index: {
        entry: 'src/views/201908020000/index.js', // path.resolve(__dirname, './src/views/201908020000/index.js'), // path.resolve(__dirname, 'src', 'views', event_id.toString(), 'index.js'), // page 的入口
        template: 'src/public/index.html', // 模板来源
        filename: 'index.html', // 在 dist/index.html 的输出
        // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common']
    },
}
if (process.env.NODE_ENV === 'development' && event_id) {
    page = objectProject // 判断开发环境不用
} else {
    console.log('id not find')
}
module.exports = {
    publicPath: '/', // 官方要求修改路径在这里做更改，默认是根目录下，可以自行配置
    outputDir: 'dist', // 标识是打包哪个文件
    pages: page,
    productionSourceMap: false,
    devServer: {
        open: true, // 项目构建成功之后，自动弹出页面
        host: 'localhost', // 主机名，也可以127.0.0.0 || 做真机测试时候0.0.0.0
        port: 8081, // 端口号，默认8080
        https: false, // 协议
        hotOnly: false, // 没啥效果，热模块，webpack已经做好了
    },
}
*/

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const event_id = process.env.APP_EVENT_ID
console.log(event_id)

module.exports = {
    publicPath: '/',
    outputDir: path.resolve(__dirname, 'hodc', event_id), // 最后输出的目录
    assetsDir: 'cdn', // 'cdn文件相对于outputDir的路径
    indexPath: '/', // index.html相对于cdn的路径
    productionSourceMap: true, // source-map
    lintOnSave: false,
    css: { 
        extract: false, // 是否独立出css
    },
    pages: {
        index: {
            // page 的入口
            entry: 'src/views/' + event_id + '/index.js' ,
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
    },
    devServer: {
        open: true, // 项目构建成功之后，自动弹出页面
        host: 'localhost', // 主机名，也可以127.0.0.0 || 做真机测试时候0.0.0.0
        port: 1120, // 端口号，默认8080
        https: false, // 协议
        hotOnly: false, // 没啥效果，热模块，webpack已经做好了
    },
    configureWebpack: {
        plugins: [
            new HtmlWebpackPlugin({
                template: 'public/index.html',
                eventId: event_id
            })
        ]
    }
}