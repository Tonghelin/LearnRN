/**
 * @desc
 * @author Linth
 * @date 2018-08-08 00:03:33
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Navigator
} from 'react-native';
import page1 from './page1';

export default class LearnRN extends Component<Props> {
  //
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
  }

  configureScene(route) {
    return Navigator.SceneConfigs.FadeAndroid;
  };

  renderScene(router, navigator) {
    switch(router.name) {
      case 'page1':
        return <Page1 navigator={navigator} />;
    };
  };

  render() {
    return (
      <Navigator
        initialRoute={{name: 'page1'}}
        configureScene={this.configureScene}
        renderScene={this.renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({});
