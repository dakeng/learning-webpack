# webpack 处理多个入口点问题

参考链接：

- [官方文档](https://github.com/webpack/webpack/tree/webpack-1/examples/multiple-entry-points)

- [webpack--令人困惑的地方](https://github.com/chemdemo/chemdemo.github.io/issues/13)

- [Webpack 异步按需加载](http://www.xheldon.com/webpack-details-one.html)

  ​

当[entry](https://webpack.js.org/concepts/entry-points/) 存在多个入口点时，webpack会对应生成多个独立的bundle，并且可以利用[CommonsChunkPlugin](https://webpack.js.org/plugins/commons-chunk-plugin/)将共用的代码提取出来生成新的bundle。此外，在测试这个demo的时候还涉及到了另外一些问题，就是异步按需加载，参考文章[Webpack 异步按需加载](http://www.xheldon.com/webpack-details-one.html) 。以及非入口点文件（non-entry chunk files，即chunkFilename的值所对应生成的文件）如何在css、html文件中加载正确的url值（path和publicPath的区别）。





