/**
 * @desc Drawernavigator 抽屉导航
 * @author Linth
 * @date 2018-09-10 17:52:17
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import {
  DrawerNavigator,
  TabNavigator,
  DrawerItems,  //  定制化contentComponent时使用
} from 'react-navigation';

import Mine from '../Mine/Mine';
import LoginLeft from '../login/LoginLeaf';
import WaitingLeaf from '../login/Waiting';

const SimpleApp2 = TabNavigator({
  Home: { screen: LoginLeft },
  Mine: { screen: Mine }
});

const SimpleApp = DrawerNavigator({
  Login: {
    screen: LoginLeft
  },
  Wait: {
    screen: WaitingLeaf
  },
  Mine: {
    screen: Mine,
  }
},{ // 第二个参数 TabNavigatorConfig
  drawerWidth: 280, // 抽屉的宽度
  drawerPosition: 'right', // 默认'left'  取值为 'left' 或者 'right'
  // contentComponent: () => (
  //   <View>
  //     <Text style={{width: 60,height: 60,backgroundColor: '#188eee', margin: 50,color: '#fff'}}>
  //       改写了抽屉导航的内容
  //     </Text>
  //   </View>
  // ), //  RN组件 用来渲染抽屉
  contentOptions: {
    activeTintColor: "red" , // 导航激活的颜色
    activeBackgroundColor: '#ccc', // 当标签栏激活时标签栏背景色，仅iOS平台有效
    inactiveTintColor: '#188eee', // 当标签栏未激活时的颜色
    inactiveBackgroundColor: '#03ddd0', // 当标签栏非激活时的背景颜色，仅iOS平台有效
    style: '', // 抽屉面样式
    labelStyle: '', // 标题样式
  }
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
