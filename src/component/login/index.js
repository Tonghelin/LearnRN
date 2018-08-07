/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, // 平台检测API
  StyleSheet,
  Text,
  View,
  Dimensions, // 获取设备屏幕信息API
  PixelRatio, // PixelRatio类提供了访问设备的像素密度的方法
  TextInput,
  BackHandler
} from 'react-native';
import LoginLeaf from "./LoginLeaf";
import WaitingLeaf from "./Waiting";

type Props = {};

const pixelRatio = PixelRatio.get();

export default class LearnRN extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstRow}>
          <View style={styles.test1}/>
          <View style={styles.test2}/>
          <View
            style={styles.test3}
            opacity={0.5}
          />
        </View>
        <Text>
          welcome to react nativess
        </Text>
        <View style={styles.testPosition}/>
        <Text style={styles.welcome0}>
          welcome to react native
        </Text>
        <Text>
          welcome to react native
        </Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  firstRow: {
    height: 40,
    marginTop: 40, // 如果这里使用的是 top 属性 相当于是定位了 那么对该组件后面的组件将不会紧跟在后面
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  test1: {
    width: 68,
    height: 24,
    backgroundColor: 'white',
    // flex: 1
  },
  test2: {
    width: 40,
    height: 24,
    backgroundColor: 'red',
    alignSelf: 'flex-start', //
  },
  test3: {
    width: 100,
    height: 24,
    backgroundColor: '#188eee'
  },
  testPosition: {
    backgroundColor: 'grey',
    height: 100,
    width: 100,
    // position: 'absolute',
    // top: 150,
    // right: 50,
    borderWidth: 1/pixelRatio, // 设置只有一个实际像素的宽度
    borderStyle: 'dotted',
    opacity: .6,
    borderRadius: 50,
    // elevation: 50 , // android 平台特有的
  },
  welcome0: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '45deg'}]
  }
});
