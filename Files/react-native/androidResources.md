# [Android 资源](https://developer.android.com/guide/topics/resources/providing-resources)

所谓Android资源，即Resources就是指代码所调用的静态资源和附加文件。比如：bitmaps、layout definitions、UI string,animation structures.

```
MyProject/
    src/
        MyActivity.java
    res/
        drawable/
            graphic.png
        layout/
            main.xml
            info.xml
        mipmap/
            icon.png
        values/
            strings.xml
```

## 提供可选资源

## Android是如何匹配到最合适的资源

Android会根据当前设备的配置信息进行文件选择，如当前设备的配置信息如下：

```
Locale = en-GB \\ 英国
Screen orientation = port   \\屏幕方向不确定
Screen pixel density = hdpi \\安卓平板
Touchscreen type = notouch   \\非触摸屏
Primary text input method = 12key
```

假设我们的资源文件夹如下：

```
drawable/
drawable-en/
drawable-fr-rCA/
drawable-en-port/
drawable-en-notouch-12key/
drawable-port-ldpi/
drawable-port-notouch-12key/
```

所以最终匹配的结果是`drawable-en-port`