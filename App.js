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
import LearnRN from "./src/component/Text/Clipboard"; // 这是个访问操作系统剪切面板


// 记录手机屏幕的宽高
const {height, width} = Dimensions.get('window');
const pixelRatio = PixelRatio.get();
const instructions = Platform.select({
  ios: () => console.log(`window.height= ${pixelRatio}`),
  android:() => alert('this is android')
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
