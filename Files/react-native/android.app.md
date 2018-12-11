# [android.app](https://developer.android.com/reference/android/app/package-summary)

这是封装了整个Android应用的模型的高级类集合。一个Android应用被定义主要由四大核心组件所组成。其中`Activity`和`Service`在`android.app`中。而两个`ContentProvider`和`BroadcastReceiver`则在`android.content`中。

所谓`Activity`就是指用户在屏幕上的交互动作。而`Service`就是指后台的应用运行，比如`Service`可以在后台播放音乐、接收交易等等。

`Fragment`也是一个非常重要的class，尤其是像平板这样的宽屏设备上。