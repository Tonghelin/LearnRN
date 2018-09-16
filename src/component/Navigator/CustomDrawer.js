/**
 * @desc 定制化一个 contentComponent
 * @author Linth
 * @date 2018-09-11 00:30:41
*/

import React, { Component } from 'react'; import {
  AppRegistry, BackHandler, Platform, View, Text, StyleSheet
} from 'react-native';
import {
  DrawerNavigator,
  DrawerItems
} from 'react-navigation';


import Mine from '../Mine/Mine';
import LoginLeft from '../login/LoginLeaf';
import WaitingLeaf from '../login/Waiting';

  const CustomDrawerContentComponent = (props) => (
    <View style={styles.container}>
      <DrawerItems {...props} />
      <Text>
        My custom drawer content
      </Text>
    </View>
  );
const SimpleApp = DrawerNavigator( {
    Login: {
      screen: LoginLeft
    },
    Wait: {
      screen: WaitingLeaf
    },
    Mine: {
      screen: Mine,
    },
  },{
    contentComponent:CustomDrawerContentComponent //设置订制的contentComponent
  }
);
export default class LearnRN extends Component<Props> {
  render() {
    return (
      <SimpleApp/>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }

});