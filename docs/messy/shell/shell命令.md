## shell 知识点

> 为脚本设置可执行权限「chmod +x *.sh」*指的是你的 shell 脚本文件
> ./\*.sh 便可以执行此脚本

1. 定义变量

```bash
shell_va="变量一"
shell_va2="变量二"
```

::: danger shell 字符串
**单引号**里面**任何变量**都是**无效**的, 并且只能**成对出现**  
|  
|  
**双引号**里面可以有变量, 可以出现转义字符

:::

```bash
name='DZL'
echo 'hello, ${name}' // hello, ${name}

name2="DZL2"


echo "hello, ${name2}" # hello, DZL2
echo "hello, I am \"$name2\"!" # hello, I am "DZL2"!
```

2. 输出变量

```bash
echo $shell_va
echo ${shell_va}
echo $shell_va2
echo ${shell_va2}
```

3. 两种输出变量的方法边界

```bash
for ((i=0; i<10; i++)); do
  echo ${i}.txt
done
```

4. 可读的变量

```bash
readonly Url="http://www.baidu.com"
Url="http://www.baidu1.com" // ./test.sh:14: read-only variable: Url
```

5. 删除变量

```bash
unset shell_va
unset shell_va2
```

6. 变量类型
   运行 shell 时, 会同时存在三种变量类型:
   ::: danger

- 局部变量 局部变量在脚本或命令中定义, 仅在当前 shell 实例中有效, 其他 shell 启动的程序不能访问
- 环境变量, 所有的程序, 包括 shell 启动的程序, 都能访问环境变量, 有些程序需要环境变量来保证其正常运行, 必要的时候 shell 脚本也可以定义环境变量如([zsh] ~/.bash_profile): alias cm="git commit -m"
- shell 变量 shell 变量是由 shell 程序设置的特殊变量。shell 变量中有一部分是环境变量，有一部分是局部变量，这些变量保证了 shell 的正常运行
  :::

7. 获取字符串长度

```bash
shell_va="length of string"
echo ${#shell_va} # 16
# 第一个字符串索引值为0
echo ${#shell_va:1:4} # engt
```

8. 数组定义方法

- 数组名=(值一 值二 值三 ...)

```bash
array_name=('dzl' 'lm23123' '10' 'xf' 'sy')

# 输出数组的第一位, 你会发现shell中的数组是从1开始的
echo ${array_name[0]} # ''
echo ${array_name[1]} # 'dzl'

# 输出数组全部值
echo ${array_name[@]} # 'dzl lm23123 10 xf sy'

# 输出数组第几位的长度
echo ${#array_name[1]} # 3
echo ${#array_name[2]} # 7
```

9. 单行注释

```bash
# 注释
echo "hello" # hello
echo "hello" # hello
```

10. 多行注释

```bash
:<<EOF
echo '注释'
注释
注释
注释
注释
EOF
```

11. 传递参数

```bash
# test.sh
echo "Shell 传递参数实例！";
echo "执行的文件名：$0";
echo "第一个参数为：$1";
echo "第二个参数为：$2";
echo "第三个参数为：$3";

# 执行脚本
  ## 给权限
  chmod +x test.sh
  ## 执行脚本
  ./test.sh "dzl" "lm" "123"

# 结果
# 执行的文件名：./test.sh
# 第一个参数为：dzl
# 第二个参数为：lm
# 第三个参数为：123
```

#执行脚本如下 ./test.sh "dzl" "lm" "123"
| 参数| 说明 | 结果 |
| ----| ---- | ---- |
| $# | 传递到脚本的参数个数 | 3 |
| $*  | 以一个单字符串显示所有向脚本传递的参数 | dzl lm 123 |
| $@  | 以一个单字符串显示所有向脚本传递的参数 | dzl lm 123 |
| $0  | 脚本文件名 | test.sh |
| $1  | 第一个参数 | dzl |
| $-  | 执行脚本时的选项参数 | - |
| $?  | 脚本执行状态 | 0表示没有错误 |
| $!  | 后台运行的最后一个进程的ID | - |
| $$ | 脚本运行的当前进程 ID | - |

::: info $_ | $@区别
相同点：都是引用所有参数。  
不同点：只有在双引号中体现出来。假设在脚本运行时写了三个参数 1、2、3，，则 " _ " 等价于 "1 2 3"（传递了一个参数），而 "@" 等价于 "1" "2" "3"（传递了三个参数）。
:::
