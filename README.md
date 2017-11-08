# page
安装项目需要的依赖
npm install 

运行项目
npm run dev

项目打包
npm run build

多页面配置写在build文件夹下面的untils中

const glob = require('glob')
const HtmlWebPackPlugins = require('html-webpack-plugin')
const PAGE_PATH = path.resolve(__dirname, '../src/pages')
const merge = require('webpack-merge')


exports.entries = function () {
	var entryFiles = glob.sync(PAGE_PATH + '/*/*.js')
	var map = {}
	entryFiles.forEach(filePath => {
		var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
		map[filename] = filePath
	})
	return map
}

exports.htmlPlugins = function () {
	let entryHtml = glob.sync(PAGE_PATH + '/*/*.html')
	let arr = []
	entryHtml.forEach((filePath) => {
		let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
		let conf = {
			// 模板来源
			template: filePath,
			// 文件名称
			filename: filename + '.html',
			// 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
			chunks: ['manifest', 'vendor', filename],
			inject: true
		}
		if (process.env.NODE_ENV === 'production') {
			conf = merge(conf, {
				minify: {
					removeComments: true,
					collapseWhitespace: true,
					removeAttributeQuotes: true
				},
				chunksSortMode: 'dependency'
			})
		}
		arr.push(new HtmlWebPackPlugins(conf))
	})
	return arr
}

然后再webpack的config文件中入口处修改

module.exports = {
  // entry: {
  //   app: './src/main.js'
  // },
  entry:utils.entries(),
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  
  在dev.config中最后concat(utils.htmlPlugins())，把新增加的页面加入
 module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'index.html',
    //   inject: true
    // }),
    new FriendlyErrorsPlugin()
  ].concat(utils.htmlPlugins())
})
在webpack.prod.conf.js中plugins中最后concat(utils.htmlPlugins())，把新增加的页面加入

assets => 静态资源文件，主要放公用的JS，CSS文件

dist => npm run build之后打包生成的文件

src => config => vue插件，XHR请求拦截，自己封装插件等入口处

src => moudels => 存放不同的模块

src => page => 不同的单页面

store => 全局变量的存储的地方

static => 三方插件，layer，bootStrap等

 
