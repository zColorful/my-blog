## mac 端 mysql 安装调试

[mysql 安装](https://dev.mysql.com/doc/refman/8.0/en/macos-installation-pkg.html)

- MySQL 在 macOS 上的安装布局

| 目录            | 目录内容                                                                     |
| --------------- | ---------------------------------------------------------------------------- |
| bin             | mysqld 服务器、客户端和实用程序                                              |
| data            | 日志文件，数据库， /usr/local/mysql/data/mysqld.local.err 默认错误日志在哪里 |
| docs            | 帮助文档，例如发行说明和构建信息                                             |
| include         | 包含（头）文件                                                               |
| lib             | 图书馆                                                                       |
| man             | Unix 手册页                                                                  |
| mysql-test      | MySQL 测试套件（使用安装程序包 (DMG) 时，在安装过程中默认禁用“MySQL 测试”）  |
| share           | 其他支持文件，包括错误消息 dictionary.txt、和重写 SQL                        |
| support-files   | 支持脚本，例如 mysqld_multi.server、 mysql.server 和 mysql-log-rotate.       |
| /tmp/mysql.sock | MySQL Unix 套接字的位置                                                      |
