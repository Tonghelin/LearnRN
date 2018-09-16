/**
 * @desc TabNavigator标签导航
 * @author Linth
 * @date 2018-09-10 01:07:34
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import Mine from '../Mine/Mine';
import LoginLeft from '../login/LoginLeaf';
import WaitingLeaf from '../login/Waiting';

const MainScreenNavigator = StackNavigator({
  Login: {
    screen: LoginLeft
  },
  Wait: {
    screen: WaitingLeaf
  }
});

const SimpleApp = TabNavigator({
  Home: { screen: MainScreenNavigator },
  Mine: { screen: Mine }
});

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
