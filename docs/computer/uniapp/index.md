### uniapp 项目搭建报错

1. 搭建好脚手架之后真机运行
   ::: danger 解决方案
1. 找到工具
1. 插件安装
1. app 真机运行, 找到对应的 hbuilder 安装包卸载重新安装, 可能是因为 app 真机运行的原因导致的
   :::

1. 搭建好脚手架之后真机运行报错
   ::: danger 解决方案 1.在终端执行一下命令  
   curl -O https://registry.npmjs.org/esbuild-darwin-64/-/esbuild-darwin-64-0.14.42.tgz  
   tar xf ./esbuild-darwin-64-0.14.42.tgz

解压之后得到 package,将该文件改名为 esbuild-darwin-64 并且将其复制到项目的 node_modules 中再次运行
:::

::: danger Cannot start service: Host version "0.14.48" does not match binary version "0.14.42" 解决方案
node_modules/esbuild-darwin-arm64 修改为 esbuild-darwin-64 再次运行
:::
