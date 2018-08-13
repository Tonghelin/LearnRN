/**
 * @desc 组件引用示例
 * @author Linth
 * @date 2018-08-13 00:30:26
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput
} from 'react-native';

export default class LearnRN extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      textInputValue: ''
    };
    this.buttonPressed = this.buttonPressed.bind(this)
  }
  componentDidMount() {
    this.refs.textInputRefer.focus();  // 调用组件的公开成员函数
  }

  buttonPressed() {
    let textInputValue = 'new value';
    this.setState({textInputValue});
    this.refs.textInputRefer.setNativeProps({
      editable: false
    });
    this.refs.text2.setNativeProps({
      style: {
        color: 'blue',
        fontSize: 30
      }
    });
    console.dir(this.refs.text2)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.button_style}
          onPress={this.buttonPressed}
        >
          点击这里
        </Text>
        <Text
          style={styles.text_prompt_style}
          ref={'text2'}
          onPress={()=>{console.log('123')}}
        >
          文字提示
        </Text>
        <View>
          <TextInput
            style={styles.text_input_style}
            ref={'textInputRefer'}
            value={this.state.textInputValue}
            onChangeText={(textInputValue)=>this.setState({textInputValue})}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button_style: {
    fontSize: 20,
    backgroundColor: 'grey',
  },
  text_prompt_style: {
    fontSize: 20
  },
  text_input_style: {
    width: 150,
    height: 50,
    fontSize: 20,
    backgroundColor: 'grey'
  }

});
