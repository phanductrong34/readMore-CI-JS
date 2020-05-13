
const path = require('path');                              
const HtmlWebpackPlugin = require('html-webpack-plugin');    // trên này khi báo require cái gì va gán vào biến thì dưới mới đc dùng

module.exports = {                                           // hàm này sẽ thực hiện compile toàn bộ file(js,html) vào thư mục dist để chạy server
    entry: ['./src/js/index.js'],        //--> thay entry point tại đây
    target: 'node',
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename: 'js/bundle.js'                    //nó sẽ compile từ thư mục local là js và ném vào trong dist
    },
    devServer:{
        contentBase: './dist'                // tức các file đc bundle bởi webpack-dev-derver sẽ đc lưu ở đây
    },
    plugins: [
        new HtmlWebpackPlugin({
        filename: 'index.html',            // tên của file khi export
        template: './src/index.html',     //nó sẽ tự độgn compile html từ folder src vào thưu mục dist ở trên và tự động link bundle.js

        //sửa 
        templateParameters(compilation, assets, options) {
        return {
          compilation: compilation,
          webpack: compilation.getStats().toJson(),
          webpackConfig: compilation.options,
          htmlWebpackPlugin: {
            files: assets,
            options: options
          },
          process,
        };
      },
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true
      },
      nodeModules: false
        })
    ],
    node: {
        fs: 'empty',
      },
    module: {
        rules: [ 
            {
                test: /\.js$/,              //tìm tất cả file có đuôi .js
                exclude: /node_modules/,   //loại trừ tất cả node modules
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.(gif|png|jpe?g|svg)/i,
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options:{
                            outputPath: 'images',
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                              },
                              // optipng.enabled: false will disable optipng
                              optipng: {
                                enabled: false,
                              },
                              pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                              },
                              gifsicle: {
                                interlaced: false,
                              }  
                        }
                    }
                ]
            }    
        ]
    }
    

}