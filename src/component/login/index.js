/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, // 平台检测API
  StyleSheet,
  Text,
  View,
  Dimensions, // 获取设备屏幕信息API
  PixelRatio, // PixelRatio类提供了访问设备的像素密度的方法
  TextInput,
  BackHandler
} from 'react-native';
import LoginLeaf from "./LoginLeaf";
import WaitingLeaf from "./Waiting";

type Props = {};

export default class NaviModule extends Component<Props> {
  // 静态变量&&静态函数
  static mystatic1 = '静态变量读取方法 类名.变量名'

  constructor(props) {
    super(props);
    this.state = {
      currentScene: 'Login',
      phoneNumber: '',
      password: ''
    };
    this.handleBackSignal = this.handleBackSignal.bind(this);
    this.onLoginPressed = this.onLoginPressed.bind(this);
  }
  updateNum(newText) {
    this.setState((state) => { // setState 的第二个参数是回调函数，组件渲染完成后执行
      return {
        phoneNum: newText
      }
    },this.changeNumDone)
  }
  changeNumDone(){
    console.log('setState 的第二个函数是回调函数，组件渲染完成后执行')
  }

  updatePW(newText) {
    this.setState(() => {
      return {
        password: newText
      }
    });
  };
  // shouldComponentUpdate(){ // 判断是否渲染 false 否 true 是
  //   return this.state.phoneNum.length<6?false:true;
  // };

  onLoginPressed(aNumber, aPW) {
    // alert(aNumber)
    this.setState({
      currentScene: 'Waiting',
      phoneNumber: aNumber,
      userPW: aPW
    })
  }

  componentDidMount(){ //组件插入后执行
    console.log('组件插入后执行')
  }
  render() {
      if (this.state.currentScene === 'Login'){
        return <LoginLeaf onLoginPressed={this.onLoginPressed}/>
      }else {
        return (
          <View>
            <WaitingLeaf
              phoneNumber={this.state.phoneNumber}
              onGobackPressed={this.handleBackSignal}
              userPW={this.state.password}
            />
          </View>
        )
      };
  }

  handleBackSignal() {
    if (this.state.currentScene === 'Waiting') {
      this.setState({
        currentScene: 'Login'
      })
      return true;
    }
    return false;
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackSignal)
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackSignal)
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInputStyle: {
    margin: 20,
    backgroundColor: '#ddd',
    fontSize: 20,
    height: 45
  },
  textPromptStyle: {
    margin: 20,
    fontSize: 20
  },
  bigTextPrompt: {
    margin: 20,
    backgroundColor: 'gray',
    color: 'white',
    textAlign: 'center',
    lineHeight: 50,
    fontSize: 20,
    height: 50
  }
});
