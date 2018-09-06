/**
 * @desc ActivityIndicator 等待提示例程
 * @author Linth
 * @date 2018-09-04 10:00:27
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator
} from 'react-native';

export default class LearnRN extends Component<Props> {
  render() {
    return (
      <View style={{marginTop: 40}}>
        <ActivityIndicator
          size={'large'}
          color={'blue'}
          animating={true}
        />
        <View>
          <Text>
            ActivityIndicator实战
          </Text>
        </View>
        <ActivityIndicator
          size={'small'}
          color={'blue'}
          animating={true}
        />
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