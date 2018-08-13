/**
 * @desc 访问操作系统剪切面板
 * @author Linth
 * @date 2018-08-13 23:57:35
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Clipboard
} from 'react-native';

export default class LearnRN extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      textFromClipboard: ''
    }
    this.pasteFromClipboard = this.pasteFromClipboard.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  pasteFromClipboard() {
    Clipboard.getString().then(
      (textFromClipboard) => {
        this.setState({
          textFromClipboard
        });
      }
    ).catch(
      (error) => {
        console.log('pasteFromClipboard error', error);
      }
    );
  }

  copyToClipboard() {
    Clipboard.setString('abc您好！')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.textFromClipboard}
        </Text>
        <Text
          style={styles.instructions}
          onPress={this.copyToClipboard}
        >
          Press to Copy something to Clipboard.
        </Text>
        <Text
          style={styles.instructions}
          onPress={this.pasteFromClipboard}
        >
          Press to Paste.
        </Text>
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
    alignItems: 'center',
    borderWidth: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 15,
    backgroundColor: 'grey',
    fontSize: 30
  }
});

