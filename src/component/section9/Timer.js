/**
 * @desc 9.2  定时器的运用
 * @author Linth
 * @date 2018-09-05 17:15:01
 */


import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,

} from 'react-native';

export default class LearnRN extends Component<Props> {

  constructor(props) {
    super(props);
    this.progressTimer = null;
    this.state = {
      textValue: 1
    };
    // this._onChangeText.bind(this);
  }

  componentDidMount() {
    console.log('组件挂接完成');
    //
    // let textValue = 20;
    // this.setState({
    //   textValue: textValue
    // })
    this.progressTimer = window.setInterval(this._onChangeText.bind(this),100);
  }

  _onChangeText() {
    console.log(1111111111);
    // let textValue = 20;
    let textValue = this.state.textValue;
    textValue++;
    this.setState({
      textValue: textValue
    })
  }

  componentWillUnmount() {
    window.clearInterval(this.progressTimer);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          这是模版，从这里开始你的编程
        </Text>
        <Text>
          {this.state.textValue}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});