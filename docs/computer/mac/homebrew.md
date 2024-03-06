## homebrew

::: info 什么是 homebrew
Homebrew 是一款 Mac OS 平台下的软件包管理工具，拥有安装、卸载、更新、查看、搜索等很多实用的功能。简单的一条指令，就可以实现包管理，而不用你关心各种依赖和文件路径的情况，十分方便快捷。
:::

::: info homebrew 的安装软件之后

1. 配置文件在/usr/local/etc 中
2. 安装文件在/usr/local/Cellar 中
3. 二进制可执行程序的软连接在/usr/local/bin 中
4. Homebrew 会将软件包安装到独立目录，并将其文件软链接至 /usr/local 。
   :::

::: warning homebrew 路径转化原理：
1、通过 brew install 安装应用最先是放在/opt/homebrew/Cellar/目录下。  
2、有些应用会自动创建软链接放在/usr/bin 或者/usr/sbin，同时也会将整个文件夹放在/usr/local
:::
