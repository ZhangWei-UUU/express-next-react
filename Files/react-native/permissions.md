# [App 权限](https://developer.android.com/guide/topics/permissions/overview)

权限管理的目的在于保护android用户的隐私。在接入敏感数据（如：通讯录和SMS等）和系统自带功能（相机和互联网）上Android app必须发起权限获取请求。正式基于权限管理。app获得这些权限要么通过系统自动授权，要么每次都需获取用户的批准许可。

这样设计的初衷在于在默认情况下，任何app其在运行过程中都无法对操作系统、用户和其他app造成不利的影响。本文将介绍Android权限管理是如何工作的，这当中包含了： 如何将权限管理呈现给手机用户，如何强制获取权限以及权限的种类和分组。如果还希望获知如何使用这些权限，请阅读文章[《获取应用权限的请求》](https://developer.android.com/training/permissions/requesting.html)

如果一款Android App希望获取某种权限请求，首先必须在其mainfest文件中添加`<users-permisson>`用于公示出它要请求哪些权限。

比如获取发送短信权限：
```html
<users-permission android:name="android.permission.SEND_SMS">
```

在权限获取上，系统会自动判别权限等级。如果只是一般权限，系统就会自动授权。但是如果是属于危险级别的权限，比如上述的发送短信权限，就必须获取手机用户的授权。（有关权限等级的列表会在本文后面作为附录贴出）。

在Android 6之后用户在安装应用时就已经没有权限获取的相关提示，对于用户来说只有在App运行时才会有相关提示。

## 硬件权限请求

在获取硬件权限方面如：蓝牙或相机必须获得应用的许可。但是我们要知道不是所有的Android设备都是拥有这些硬件设备的，比如Android机顶盒。

和软件权限一样首先得在manifest文件中添加`<uses-feature>`标签。

```html
<uses-feature android:name="android.hardware.camera" android:required="false"/>
```

不同于软件权限的获取，在标签多了一个`android:required="false"`属性，它的意思表示即使当前设备不存在camera硬件，应用商店仍然允许设备安装该款app. 当然之后必须在代码中调用`PackageManager.hasSystemFeature()`方法来检查该硬件是否能正常调用。

假如在编程中没有在manifest文件中设置`<uses-feature>`标签,当下载设备没有该硬件的时候，应用商店就会默认`android:required="true"`, 从而阻止该应用的下载。

## 权限能干嘛？

## 自动权限的调整

## 保护等级

## 权限分组

## 在开发环境中查看App的权限

在虚拟机处在运行状态时，运行命令行：

```
adb shell pm list permissions -s
```

同时如果我们在开发时嫌各种权限提示麻烦，可以对apk文件进行权限自动授权：

```
adb shell install -g xxx.apk
```