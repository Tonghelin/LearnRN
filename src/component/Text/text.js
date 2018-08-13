/**
 * @desc Text组件 如何使用省略号装饰、
 * @author Linth
 * @date 2018-08-12 11:20:54
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput
} from 'react-native';

export default class LearnRN extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <Text
            style={styles.text1}
            ellipsizeMode='head'  // head\middle\tail\clip
            numberOfLines= {3}   // 配合使用，才能显示省略号
            // onLayout={()=>{alert('123')}}
            onLongPress={(res)=>{console.log('长按', res)}}
            Selectable={true}
          >
            12这是段文字很长，我要使用省略号装饰；这是段文字很长，我要使用省略号装饰；这是段文字很长，我要使用省略号装饰；这是段文字很长，我要使用省略号装饰；这是段文字很长，我要使用省略号装饰；这是段文字很长，我要使用省略号装饰；这是段文字很长，我要使用省略号装饰；这是段文字很长，我要使用省略号装饰；这是段文字很长，我要使用省略号装饰；这是段文字很长，我要使用省略号装饰；这是段文字很长，我要使用省略号装饰；
          </Text>
        <Text
          style={styles.text2}
        >
          12这是段文字很长，
          {`\r`}我要使用省略号装饰
          {`\r\n`}12这是段文字很长，
          {`\n`}我要使用省略号装饰
        </Text>
        <Text //
          style={styles.text3}
        >
          Text组件的阴影效果
        </Text>

        <Text //
          style={styles.text4}
        >
          Text组件居中显示
        </Text>
        <View style={styles.view_for_textStyle}>
          <Text //
            style={styles.text5}
          >
            Text组件居中显示
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
    justifyContent: 'center'
  },
  text1: {
    textAlign: 'center',
    lineHeight: 60,
    borderWidth: 2,
    borderColor: 'red',
    fontSize: 30,
    margin: 10,
    backgroundColor: 'purple'
  },
  text2: {
    textAlign: 'center',
    lineHeight: 25,
    borderWidth: 2,
    borderColor: 'black',
    fontSize: 20,
    margin: 10,
  },
  text3: { // Text组件的阴影
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    textShadowOffset: {
      width: 5,
      height: 5
    },
    textShadowRadius: 2,
    textShadowColor: 'grey',
    letterSpacing: 5
  },
  text4: {
    borderWidth: 2,
    borderColor: 'gray',
    margin: 20,
    height: 100,
    textAlign: 'center',
    justifyContent: 'center', // 设置了justifyContent 但是没有效果显示
  },
  view_for_textStyle: {
    height: 100,
    borderWidth: 2,
    borderColor: 'gray',
    margin: 20,
    justifyContent: 'center', // 正确的做法是在text组件外面包裹一个View组件，并设置justifyContent
  },
  text5: {
    fontSize: 20,
    textAlign: 'center',
  },
});