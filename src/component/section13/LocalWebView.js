/**
 * @desc 加载本地网页例程
 * @author Linth
 * @date 2018-09-24 01:18:39
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  WebView,
  StatusBar
} from 'react-native';

export default class LearnRN extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <WebView
          style={styles.webView}
          automaticallyAdjustContentInsets={false}
          source={require('../Html/a.html')}
          javaScriptEnabled={true}
          domStorageEnable={false}
          startInLoadingState={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  webView: {
    backgroundColor: 'white',
    height: 350
  }
});
