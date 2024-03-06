### zsh

- 使用场景

::: danger .zshenv
.zshenv 中存放的**环境变量**配置项在任何场景下都能被读取, 这里通常把 「$PATH」、「$HOME」、「$USER」等配置项放在这里, 这样无论是在交互 shell, 或者运行程序都会读取此文件
:::

::: danger .zshrc
.zshrc 主要用在交互 shell 中, 它会在每次打开交互 shell 时被读取, 在电脑每次自启时都会生效（永久有效）这里可以配置一些默认的命令, 比如「alias」、「bindkey」等等
:::

::: danger .bash_profile
.bash_profile.bash_profile中修改的环境变量只对当前窗口有效，修改完.bash_profile之后记得在终端输入source ~/.bash_profile使之生效。
:::

::: danger .zlogin
.zlogin 是在 login shell 的时候读取, 比如系统启动的时候会读取此文件
:::

::: danger .zprofile
.zprofile 是.zlogin 的替代品, 如果使用了.zlogin 就不必关心此文件
:::

读取顺序

::: danger
.zshenv → [.zprofile if login] → [.zshrc if interactive] → [.zlogin if login] → [.zlogout sometimes]
:::

```bash
a. /etc/profile
b. /etc/paths
c. ~/.bash_profile
d. ~/.bash_login
e. ~/.profile
f. ~/.bashrc
```

- a 和 b 都是系统级别的, 系统启动就会加载, 其他的都是用户级别的
- c,d,e 按照从前往后的顺序读取, 如果 c 文件存在, 则后面的几个文件就会被忽略不读了,
- f, 没有上述规则, 它是 bash shell 打开的时候载入的

一般配置到全局变量的文件都是属于应用程序, 不过如果配置到了 bashrc 里,再要用 ide 的 terminal 去运行它，理论上是跑不起来的，还是按照大多数人的走法去配置到~/.bash_profile 里的好。

### Mac 终端的 zsh 和 base 的区别

1. 从 macOS Catalina 版开始，zsh (Z shell) 是所有新建用户帐户的默认 Shell。
   bash 是 macOS Mojave 及更低版本中的默认 Shell。
2. zsh 基本上兼容 bash。

如果您正在使用 bash 描述文件（例如，为了设置环境变量、别名或路径变量），则您应改为使用作用与它相同的 zsh 描述文件。例如：
.zprofile 的作用与 .bash_profile 相同，并且在登录时运行（包括通过 SSH 运行）；
.zshrc 的作用与 .bashrc 相同，并针对每个新的“终端”会话运行；

### 操作步骤

- 查看 shell 类型

```bash
$ echo $SHELL
如果是 「/bin/zsh」就是zsh
```

### zsh 和 bash 的区别

::: danger
bash script 更加接近 posix 标准，zsh 则更加“灵活”  
bash 基本上上手即用，zsh 则需要繁杂的配置（但我们有神一样的 oh-my-zsh）  
二者的命令提示符不同，zsh 的命令提示符可定制性更高  
zsh 的自动补全功能更加强大  
zsh 的拼写检查功能更强

从一个交互式终端的角度来讲，zsh 更为强大，但是作为脚本解释器，bash 更加符合 posix 标准，因此，建议读者日常使用 zsh（配合 oh-my-zsh），但是使用 bash 做脚本解释器。
:::

```bash
切换bash chsh -s /bin/bash
切换zsh chsh -s /bin/zsh

在配置文件方面:
bash读取的配置文件是 ~/.bash_profile
zsh读取的配置文件是 ~/.zshrc

当从bash切换为zsh时，如果不想重新配置一遍.zshrc文件，可以__在.zshrc文件中加上source ~/.bash_profile，从而直接从.bash_profile文件读取配置。
```
