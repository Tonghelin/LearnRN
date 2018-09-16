/**
 * @desc mine 我的页面
 * @author Linth
 * @date 2018-09-10 01:03:19
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';

export default class LearnRN extends Component<Props> {
  static navigationOptions = {
    title: '我的',
    drawerLabel: 'Mine',  //  字符串或者 React 元素用来显示在抽屉的边栏上
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('../../images/image1.jpg')}
        style={styles.icon}
      />
    )
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>
          这是模版，从这里开始你的编程
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  icon: {
    width: 24,
    height: 24
  }
});
