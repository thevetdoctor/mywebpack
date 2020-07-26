const path = require("path");

module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
                    {
                        test: /\.css$/,
                        loader: "style-loader!css-loader",
                        // use: [
                        //     // style-loader
                        //     { loader: 'style-loader' },
                        //     // css-loader
                        //     {
                        //       loader: 'css-loader',
                        //       options: {
                        //         modules: true
                        //       }
                        //     }
                        //   ]
                    },
                    {
                    test: /\.js$/,
                    exclude: /node_modules/, 
                    loader: "babel-loader", 
                    query: {
                        // presets: [ "es2015" ]
                        }
                    }
                    
                ]
            }
}