/**
 * @desc 组件的onLayout 属性实践
 * @author Linth
 * @date 2018-08-07 00:07:50
*/
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions
} from 'react-native';

export default class LearnRN extends Component<Props> {
  _onLayout(event) {
    {  // 结构赋值 为了作用域限制
      let { x, y, width, height } = event.nativeEvent.layout;
      console.dir(event)
      console.log(`width = ${width}`)
      console.log('111111', width)
    }
    // let Dimensions = require('Dimensions'); // API 也可以这样引入 同上面的 import一样
    let { width, height } = Dimensions.get('window');
    console.log('设备的宽度', width );
  }

  _onLayoutText(event) {
    let { x, y, width, height } = event.nativeEvent.layout;
    console.log(`Text中的onLayout回调函数 width = ${width}`)
  }

  render() {
    return (
      <View
        style={styles.container}
        onLayout={(event) => {this._onLayout(event)}}
      >
        <Text
          style={styles.welcome}
          onLayout={this._onLayoutText}
        >
          这是模版，从这里开始你的编程hhh
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5fcff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
