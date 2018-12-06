# [App Manifest](https://developer.android.com/guide/topics/manifest/manifest-intro)

每一个项目都会有一个AndroidManifest.xml文件，该文件会给到Android打包工具、Android系统和应用商店有关该应用的基本信息。

其中包含以下内容：

App的`Package name`,该名称常常用于匹配项目的代码命令空间。Android打包工具会根据`Package name`定位源代码所在位置然后进行项目打包。 在打包时，会从Gradle压缩文件中提取应用ID来替换该值。 

应用组件，这中间包含activities, services, broadcast receivers, content providers. 每个组件必须能够识别基础属性。如JAVA的class name.


The permissions that the app needs in order to access protected parts of the system or other apps. It also declares any permissions that other apps must have if they want to access content from this app. Read more about permissions.
The hardware and software features the app requires, which affects which devices can install the app from Google Play. Read more about device compatibility.