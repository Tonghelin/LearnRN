/**
 * @desc 高度自增长的TextInput组件
 * @author Linth
 * @date 2018-08-13 21:34:14
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput
} from 'react-native';

class AutoExpandingTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      height: 0
    };
    this._onChange = this._onChange.bind(this);
  }

  _onChange(event) {
    this.setState({
      text: event.nativeEvent.text
    })
    // event.nativeEvent.contentSize这个好像被废除了 哎
    // let { height} = event.nativeEvent.contentSize.height;
    console.log('event', event)
  }

  render() {
    return (
      <TextInput
        {...this.props}
        style={[styles.text_input_style, {height: Math.max(35, this.state.height)}]}
        multiline={true}
        onChange={this._onChange}
        value={this.state.text}
      />
    )
  }
}

export default class LearnRN extends Component<Props> {

  _onChangeText = (newText) => {
    console.log('inputed text',newText)
  }

  render() {
    return (
      <View style={styles.container}>
        <AutoExpandingTextInput
          style={styles.text_input_style}
          onChangeText={this._onChangeText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text_input_style: {
    fontSize: 20,
    width: 300,
    height: 30,
    backgroundColor: 'grey',
    paddingTop: 0,
    paddingBottom: 0,
  }
});
