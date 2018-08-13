/**
 * @desc StatusBar 状态栏组件示例
 * @author Linth
 * @date 2018-08-13 21:11:01
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar
} from 'react-native';

export default class LearnRN extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={false}
          barStyle={'light-content'}
          backgroundColor='grey' // android 平台
          translucent={true} // android 平台
          showHideTransition={'fade'} // ios 平台
        />
        <Text style={styles.text_style}>
          123
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text_style: {
    backgroundColor: 'black',
    height: 30
  }
});