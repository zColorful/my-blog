## 深入理解 webpack 文件打包机制

- 最简单的 webpack 使用流程

```js
// src/single/index.js
var index2 = require("./index2");
var util = require("./util");
console.log(index2);
console.log(util);

// src/single/index2.js
var util = require("./util");
console.log(util);
module.exports = "index 2";

// src/single/util.js
module.exports = "Hello World";

// 通过 config/webpack.config.single.js 打包
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    index: [path.resolve(__dirname, "../src/single/index.js")],
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[chunkhash:8].js",
  },
};
```
