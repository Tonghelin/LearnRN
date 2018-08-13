/**
 * @desc
 * @author Linth
 * @date 2018-08-12 22:01:21
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Keyboard
} from 'react-native';

export default class LearnRN extends Component<Props> {
  constructor(props){
    super(props);
    this.keyboardDidShowListener = null;
    this.keyboardDidHideListener = null;
    this.state = {
      KeyboardShown: false
    }
  }

  keyboardDidShowHandler(event){
    this.setState({
      KeyboardShown: true
    })
    console.log('打开', event)
  }
  keyboardDidHideHandler(event){
    this.setState({
      KeyboardShown: false
    })
    console.log('关闭', event)
  }

  componentWillMount(){
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',this.keyboardDidShowHandler.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',this.keyboardDidHideHandler.bind(this))

  }

  componentWillUnmount() {
    if (this.keyboardDidShowListener !== null ) {
      this.keyboardDidShowListener.remove();
    }
    if (this.keyboardDidHideListener !== null ) {
      this.keyboardDidHideListener.remove();
    }
  }

  onDismissKeyboard() {  //  这个函数用来强制隐藏键盘
    Keyboard.dismiss();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text_input_wrap}>
          <TextInput
            style = {styles.text_input}
          />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  text_input_wrap: {
    borderWidth: 2,
    height: 45,
    marginTop: 25,
    justifyContent: 'center'
  },
  text_input: {
    fontSize: 20
  }
});