/**
 * @desc StackNavigator 栈式导航
 * @author Linth
 * @date 2018-09-08 22:17:18
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';
import Mine from '../Mine/Mine';
import LoginLeft from '../login/LoginLeaf';
import WaitingLeaf from '../login/Waiting';

const SimpleApp = StackNavigator({
  Home: {
    screen: LoginLeft
  },
  Wait: {
    screen: WaitingLeaf
  }
},{
  headerMode: 'screen'
})

export default class LearnRN extends Component<Props> {
  render() {
    return (
        <SimpleApp/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
