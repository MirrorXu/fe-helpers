const path = require('path')
const resolve = relativePath => path.resolve(__dirname , relativePath)
module.exports = {
    entry: './src/index.ts',
    output:{
        path:resolve('../dist'),
        filename: '[name].js',
        clean:true // 编译前清空dist目录
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        client:{
            // 服务启动后打开浏览器
            // overlay:true
            open:true,
            // 该配置项允许配置从目录提供静态文件的选项（默认是 'public' 文件夹）。  禁用设置false
            static:{

            },
            overlay:{ // 出现编译错误时，客户端的遮罩层是否提示错误信息
                errors:true,
                warnings:false,
            },
        }
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
}
