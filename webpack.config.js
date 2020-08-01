const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
                    {
                        test: /\.css$/,
                        // loader: "style-loader!css-loader",
                        use: [
                            // style-loader
                            { loader: 'style-loader' },
                            // css-loader
                            {
                              loader: 'css-loader',
                              options: {
                                modules: true
                              }
                            }
                          ]
                    },
                    {
                        test: /\.jsx?$/,
                        exclude: /node_modules/, 
                        loader: "babel-loader", 
                        query: {
                            presets: [ "env", "react" ]
                            }
                    }                  
                ]
            },
plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html"
    })
  ]}