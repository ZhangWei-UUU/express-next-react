# [构建第一个原生安卓应用](https://developer.android.com/training/basics/firstapp/creating-project)

在选择`Start a new project`后选择空白项目，创建项目



## 运行程序

1. 使用USB连接安卓手机，然后打开手机的开发者模式。
2. 然后点击绿色`RUN`按钮，就能看到连接的手机，Android studio就会将app安装到手机上。
3. 如果没有手机连接，就可以创建一个虚拟机在虚拟机上开始运行。

## 监控Build 过程

在IDE的下方`Build`控制台中可以看到整个项目的打包过程，在点击上方主工具栏上的`绿色三角按钮`或者**View->Tool windows->Run**都会触发打包进程。如果希望重新打包则选择**Build->Make Project**。

在`Build`控制台中有`build`和`sync`两个tab分页，可以看到Gradle的打包执行详情。

## 管理项目

所谓`项目`就是指在当前的workspace下该应用素有的源代码、测试代码、打包配置文件和静态资源的集合。通过点击左侧`PROJECT`或`**View > Tool Windows > Project**`两种方式调出界面。

### 模块 Modules

模块是源文件和构建配置的集合，它将项目按照功能分成不同的模块。一个可以由一个或多个模块所组成，同时一个模块也可以成为其他模块的依赖。 每一个模块可以独立构建、测试和debug.

增加模块的方式：`**File > New > New Module**`

Android Studio offers a few distinct types of module:

If your build variants use product flavors, Gradle also invokes tasks to build those product flavors. To view the list of all available build tasks, click View > Tool Windows > Gradle (or click Gradle  in the tool window bar).

在构建的过程中一旦出现error，Gradle会弹出一些命令行选项来帮助处理相关问题。

On Windows or Linux, select File > Settings from the menu bar.
On Mac OSX, select Android Studio > Preferences from the menu bar.
Navigate to Build, Execution, Deployment > Compiler.
In the text field next to Command-line Options, enter your command-line options.
Click OK to save and exit.
Gradle applies these command-line options the next time you try building your app.

## 所谓Instant Run

In Android Studio 2.3 and higher, Instant Run significantly reduces the time it takes to update your APK with code and resource changes. After deploying your app to a target device running Android 5.0 (API level 21) or higher, you can click Apply Changes  to push certain code and resource changes to your running app without building a new APK—and, in some cases, without even restarting the current activity. The Run  and Debug  buttons are always available to you when you want to push your changes and force an app restart. However, you may find that using the Apply Changes button provides a faster workflow for most incremental changes to your app.