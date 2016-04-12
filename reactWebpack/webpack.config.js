var webpack = require('webpack');

module.exports = {
    // 它定义了打包的入口文件，数组中的文件会按顺序进行，并且它会自行解决依赖问题。
    entry: {
        main: './pages/main.js',
    },
    // 它定义了输出文件的的位置，包括路径，文件名，还可能有运行时的访问路径
    output: {
        path: __dirname + '/build',
        publicPath: '/build/',
        filename: '[name].js'
    },
    // Webpack 是使用类似 Browserify 的方式在本地按目录对依赖进行查找。
    // resolve属性中的extensions数组中用于配置程序可以自行补全哪些后缀。
    // 比如 Hello.jsx 这样的文件就可以直接用 require(./Hello) 引用。
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    // webpack将所有的资源都看做是模块，而模块就需要加载器
    module: {
        loaders: [
            // loaders 指定 jsx-loader 编译后缀名为 .jsx 的文件，
            // 建议给含有 JSX 的文件添加 .jsx 后缀，
            // 当然你也可以直接使用 .js 后缀， 相应的 test 配置正则要修改匹配就是。
            { test: /\.js?$/, exclude: /node_modules/, loader: 'jsx?harmony' }, 
            { test: /\.(css)/, loader: 'style-loader!css-loader' },
            // inline base64 URLs for <=8k images, direct URLs for the rest
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } 
            // loaders: ['react-hot', 'jsx?harmony']
            // loaders后面如果跟的不是数组，则会报错：LoadersList.js:81 r.forEach(function(r) 
        ]
    },
    // 我们可以在plugin参数中配置我们需要用到的各种各样的插件。
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
}