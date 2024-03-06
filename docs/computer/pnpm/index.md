## 使用 pnpm 创建 vue/react 项目报错

1. 使用命令新建项目

```js
pnpm create vite
```

然后报错提示如下

![报错提示](/assets/xm/pnpm-err.png)

然后我们使用查看无权限访问的命令查看错误信息

```bash
# /Users/dzl/.pnpm-store/ 是我的文件名
ls -la /Users/dzl/.pnpm-store/
```

然后可以看到如下提示

![报错提示](/assets/xm/pnpm-err1.png)

发现权限拥有者是 root 用户, root 用户是一个超级用户, 拥有更多系统区域的读写权限, 默认情况下,
root 用户处于停用状态, 如果您可以使用管理员帐户登录 Mac，您可以启用 root 用户，然后以 root 用户身份登录来完成您的任务。

root 用户帐户不适合日常使用。它的权限允许更改 Mac 所必需的文件。要撤销此类更改，您可能需要重新安装系统软件。您应在完成任务后停用 root 用户。

与启用 root 用户相比，在“终端”中使用 sudo 命令更为安全。要了解 sudo，请打开“终端”应用，然后输入 man sudo。

- 然后我们更改拥有者

```bash
sudo chown -R 用户名 文件夹
sudo chown -R dzl /Users/dzl/.pnpm-store
```
