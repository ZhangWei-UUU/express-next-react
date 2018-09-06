## 添加.yml 文件

在Github中创建完成一个代码库之后，在Circle2.0版本中必须创建一个隐藏文件夹`.circleci`,在该文件夹下创建一个空白文件`config.yml`。

## CircelCI 网站上的设置

1. 第一步注册CircelCI账户，然后将Github账户对其进行绑定。成功后进入dashboard界面。
2. 第二步选择左侧菜单中`ADD PROJECT`,将某个已有项目库导入到CircelCI中。
3. 第三步在引导配置项中，CircelCI会根据代码库的内容自动配置，在检查配置无误后，将config.yml代码粘贴到本地`config.yml`中。最后点击`start building`.
4. 点击左侧菜单栏`WORKFLOWS`,就会看到CircelCI每运行一次的结果。
5. 在PR的时候，返回到Github中，就能看到每一次的PR都会多出一个CI运行界面。只有在成功后才能合并代码到master上。

> 注意： 对于CircelCI来说，个人账户和你所有加入的组织账户在代码库方面是分开的，开发者需要按需切换。