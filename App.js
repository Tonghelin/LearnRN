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
import LoginLeaf from "./src/component/login/LoginLeaf";
import NaviModule from "./src/component/login";

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
      <NaviModule/>
    );
  }
}

const styles = StyleSheet.create({});
