/**
 * @desc TextInput 组件
 * @author Linth
 * @date 2018-08-12 16:01:53
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
      <View style={styles.container }>
        <View
          style={ styles.text_input_wrap}
        >
          <TextInput
            style={styles.text_input}
            autoCapitalize = 'words'
            autoCorrect={true}
            // autoFocus={true}
            blurOnSubmit={true}
            // editable={false} // 是否允许用户修改内容
            defaultValue= '默认值'
            keyboardType = 'email-address'
            // returnKeyType = 'done' // 设置软件盘的会车键的表现
            secureTextEntry={true}
          />
        </View>
        <Text>
          下面的这个TextInput组件的表现：TextInput组件在两个平台上的不同表现
        </Text>
        <TextInput
          style = {styles.text_input2}
          defaultValue = 'Ajfg 你好'
          onEndEditing = { (event) => {alert(event.nativeEvent.text)}}
        />
        <Text>
          TextInput组件的生命周期
        </Text>
        <TextInput
          style = {styles.text_input2}
          defaultValue = '生命周期'
          onEndEditing = { (event) => {alert(event.nativeEvent.text)}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20
  },
  text_input: {
    paddingLeft: 15,
    // lineHeight: 35
  },
  text_input_wrap: {
    borderWidth: 2,
    height: 45,
    margin: 10,
    justifyContent: 'center'
  },
  text_input2: {
    width: 200,
    // height: 70,
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    borderWidth: 2
  }
});
