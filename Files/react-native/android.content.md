# [android.content](https://developer.android.com/reference/android/content/package-summary)

android.content所包含的classes用于接入和发布数据到设备上。它主要包含三大类型的API:

* **Content Sharing** 用于在不同的component之间分享内容。主要的class有：
1. `ContentProvider`和`ContentResolver`用于管理和发布app的永久数据。
2. `Intent`和`IntentFilter`用于在不同的组件之间传递结构化消息。

* **Package management** 接入有关`.apk`文件的信息，activities, permissions, services, signatures, and providers.其中最重要的class为`Packagemanager

* **Resource management** 