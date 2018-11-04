/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PixelRatio,
  TextInput
} from 'react-native';
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
// import LearnRN from "./src/component/ScrollView/ScrollView"; // 8.1.6 ScrollView 组件基本用法
// import LearnRN from "./src/component/ListView/ListView"; // 8.3 ListView 组件基本用法--简单的列表
// import LearnRN from "./src/component/ListView/ListViewSection"; // 8.3 ListView 带分段标识的列表
// import LearnRN from "./src/component/section9/ActivityIndicator"; // 第九章之等待提示示例
// import LearnRN from "./src/component/section9/Timer"; // 第九章之定时器
// import LearnRN from "./src/component/section9/Progress"; // 第九章之ios进度条
// import LearnRN from "./src/component/section9/Switch"; // 第九章之Switch开关组件
// import LearnRN from "./src/component/Navigator/StackNavigator"; // 第10章之 StackNavigator 栈式导航
// import LearnRN from "./src/component/Navigator/TabNavigator"; // 第10章之 StackNavigator 标签导航
// import LearnRN from "./src/component/Navigator/DrawerNavigator"; // 第10章之 DrawerNavigator 抽屉导航
// import LearnRN from "./src/component/Navigator/CustomDrawer"; // 第10章之 DrawerNavigator 定制化contentComponent
// import LearnRN from "./src/component/Modal/ModalExample"; // 第10.8.1章之 自定义Modal组件
// import LearnRN from "./src/component/Modal/UseModal"; // 第10.8.2章之 使用自定义Modal组件
// import LearnRN from "./src/component/section11/PanResponder"; // 第11章手势识别之  11.4.1 单点手势---点击、拖动选择百分比参数
// import LearnRN from "./src/component/section13/WebView"; // 第13章  WebView组件之网页浏览器
// import LearnRN from "./src/component/section13/LocalWebView"; // 第13章  WebView组件之加载本地网页
// import LearnRN from "./src/component/section14/loacl"; // 第13章  WebView组件之加载本地网页
// import LearnRN from "./src/component/section14/cameraRoll"; // 第14章  WebView组件之加载本地网页
// import LearnRN from "./src/component/section14/photoSelection"; // 第14章  WebView组件之加载本地网页
// import LearnRN from "./src/component/section15/datePickerAndroid"; // 第15章  DatePickerAndroid
// import LearnRN from "./src/component/section15/timePickerAndroid"; // 第15章  TimePickerAndroid
// import LearnRN from "./src/component/section15/picker"; // 第15章   Picker 下拉框选择器
// import LearnRN from "./src/component/section15/appState"; // 第15章   AppState 应用当前状态判断
// import LearnRN from "./src/component/section15/geolocation"; // 第15章   navigator.geolocation. 定位
import LearnRN from "./src/component/section15/vibrate"; // 第15章   navigator.geolocation. 定位



// 记录手机屏幕的宽高
const {height, width} = Dimensions.get('window');
const pixelRatio = PixelRatio.get();
const instructions = Platform.select({
  ios: () => console.log(`window.height= ${pixelRatio}`),
  android:() => console.log('this is android')
});
let widthOfMargin = width * 0.05;

type Props = {};

export default class App extends Component<Props> {

  componentDidMount(){ //组件插入后执行
    instructions();
  }
  render() {
    return (
      <LearnRN/>
    );
  }
}

const styles = StyleSheet.create({});
