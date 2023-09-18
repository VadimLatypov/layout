const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/js/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {   
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader', 
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    // настройки локального сервера
    devServer: {
        port: 9001,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
    // Плагин для корректной работы vue-loader
    plugins: [
        new VueLoaderPlugin()
    ]
}