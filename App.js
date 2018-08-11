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
import LearnRN from "./src/component/login/image2"; // Image组件 之 加载静态图片资源
// import LearnRN from "./src/component/NaviBar"; // 这是个失败的组件
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
