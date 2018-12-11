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
A module is a collection of source files and build settings that allow you to divide your project into discrete units of functionality. Your project can have one or many modules and one module may use another module as a dependency. Each module can be independently built, tested, and debugged.

Additional modules are often useful when creating code libraries within your own project or when you want to create different sets of code and resources for different device types, such as phones and wearables, but keep all the files scoped within the same project and share some code.

You can add a new module to your project by clicking File > New > New Module.

Android Studio offers a few distinct types of module:


If your build variants use product flavors, Gradle also invokes tasks to build those product flavors. To view the list of all available build tasks, click View > Tool Windows > Gradle (or click Gradle   in the tool window bar).

If an error occurs during the build process, Gradle may recommend some command-line options to help you resolve the issue, such as --stacktrace or --debug. To use command-line options with your build process:

Open the Settings or Preferences dialog:
On Windows or Linux, select File > Settings from the menu bar.
On Mac OSX, select Android Studio > Preferences from the menu bar.
Navigate to Build, Execution, Deployment > Compiler.
In the text field next to Command-line Options, enter your command-line options.
Click OK to save and exit.
Gradle applies these command-line options the next time you try building your app.

## 所谓Instant Run

In Android Studio 2.3 and higher, Instant Run significantly reduces the time it takes to update your APK with code and resource changes. After deploying your app to a target device running Android 5.0 (API level 21) or higher, you can click Apply Changes  to push certain code and resource changes to your running app without building a new APK—and, in some cases, without even restarting the current activity. The Run  and Debug  buttons are always available to you when you want to push your changes and force an app restart. However, you may find that using the Apply Changes button provides a faster workflow for most incremental changes to your app.