# 成神之路
  [点击这里查看笔记`密码6666`](http://naotu.baidu.com/file/2935b161883effd55a98323bfdba0701?token=27f9ec77b1743ec4)

# React Native 跨平台移动应用开发---实践篇
  react native 自学实践,每个章节学习内容独立分支

### dev_01 第二章节 状态机思维与状态机变量
    * 请查看笔记👆📒

#### 一个好的React Native 设计思路

    创建多个只负责渲染数据的无状态React Native 组件，
    将它们封装在一个有状态的 React Native 组件中，
    并把这个有状态的React Native 组件的状态机变量的值
    通过 props 传送给无状态的 React Native 组件

    * 有状态的React Native组件封装了UI 的交互逻辑
    * 无状态的React Native 组件负责渲染UI界面

#### react native 代码编写逻辑

     1. 导入需要用到的 react-native 组件与API
     2. 定义一个组件（js类）
     3. 通过 AppRegistry API 向React-native框架注册定义的组件

### dev_02 没有这个分支
    dev_01 就是第二章节的内容，这里空着了

### dev_03 第三章：页面导航、弹出框及深入理解属性
    *

### dev_04
    没有此分支

### dev_05 第五章：flexbox 布局、View、Image与可触摸组件
    * 5.1 flexbox 布局
    * 5.2 View 组件
    * 5.3 Image 组件
    * 5.4 可触摸组件

### dev_06 第六章：Text、TextInput、等相关知识
    ***
        6.1 Text 组件
        6.2 Text 组件在两个平台上的不同表现
        6.3 TextInput 组件
        6.4 TextInput 组件在两个平台上的不同表现
        6.5 TextInput 组件的生命周期
        6.6 Keyboard API、软键盘与键盘事件
        6.7 组件的引用
        6.8 跨平台状态栏组件
        6.9
        6.10 访问操作系统的剪贴板
    ***

### dev_07 第七章 组件生命周期、数据存储、及React Native 应用实现步骤

    * 7.1 组件生命周期
    * 7.2 读取JSON文件
    * 7.3 数据持久化操作
    * 7.4 数据表操作
    * 7.5 React Native 应用实现步骤


### dev_07_02 第七章示例：日记例程(上)

### dev_08 第八章 ScrollView 和 ListView

    * 8.1 ScrollView 组件
    * 8.2 ListView 组件
    * 8.3 简单的列表
    * 8.4 带分段标志的列表
    * 8.5 日记例程(下) 见dev_07_2

### dev_09 等待提示、进度条和Switch

    * 9.1 ActivityIndicator 组件
    * 9.2 iOS进度条组件
    * 9.3 Android 平台进度条组件
    * 9.4 Awitch 组件

### dev_10 导航与Modal

    * 10.1
    * 10.
    * 10.
    * 10.
    * 10.

### dev_11 手势识别

    * 11.
    * 11.
    * 11.
    * 11.

### dev_12 网络

    * 12.
    * 12.
    * 12.
    * 12.
    * 12.
    * 12.
    * 12.

### dev_13 网页浏览器、音视频媒体播放

    * 13.
    * 13.
    * 13.
    * 13.

### dev_14 应用权限与图库操作

    * 14.
    * 14.
    * 14.
    * 14.
    * 14.
    * 14.
    * 14.
    * 14.
    * 14.

### dev_15 选择器位置相关和应用状态

    * 15.
    * 15.
    * 15.
    * 15.
    * 15.
    * 15.
    * 15.
    * 15.

### dev_16 RN开源组件

    * 16.
    * 16.
    * 16.
    * 16.
    * 16.
    * 16.
    * 16.
    * 16.
    * 16.

// import LearnRN from "./src/component/login";  // flex布局 transform变换
// import LearnRN from "./src/component/login/index2"; // 组件的onLayout 属性实践
// import LearnRN from "./src/component/login/image"; // Image组件 之 加载网络图片资源
// import LearnRN from "./src/component/login/image2"; // Image组件 之 加载静态图片资源
// import LearnRN from "./src/component/NaviBar"; // 这是个失败的组件
// import LearnRN from "./src/component/Text/text"; // 这是个失败的组件
// import LearnRN from "./src/component/Text/textInput"; // 这是个失败的组件
// import LearnRN from "./src/component/Text/keyboard"; // 这是个keyboard
// import LearnRN from "./src/component/Text/ref"; // 这是个组件引用示例
// import LearnRN from "./src/component/Text/position"; // 这是个组件位置信息
// import LearnRN from "./src/component/Text/StatusBar"; // 这是个状态栏组件
// import LearnRN from "./src/component/Text/textInput_autoHeight"; // 这是个TextInput组件自增长
// import LearnRN from "./src/component/Text/Clipboard"; // 这是个访问操作系统剪切面板
// import LearnRN from "./src/component/dataStorage/asyncStorage"; // 7.3 数据持久化操作
import LearnRN from "./src/component/diary/index"; // 7.5 日记例程