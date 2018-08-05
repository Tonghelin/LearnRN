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
  BackHandler,
  Alert
} from 'react-native';

// 记录手机屏幕的宽高
const {height, width} = Dimensions.get('window');
const pixelRatio = PixelRatio.get();
const instructions = Platform.select({
  ios: () => console.log(`window.height= ${pixelRatio}`),
  android:() => alert('this is android')
});
let widthOfMargin = width * 0.05;


type Props = {};

export default class LoginLeaf extends Component<Props> {
  // 静态变量&&静态函数
  static mystatic1 = '静态变量读取方法 类名.变量名'

  constructor(props) {
    super(props);
    this.name = 'hhh'
    this.state = {
      phoneNum: '',
      password: ''
    };
    this.updatePW = this.updatePW.bind(this);//
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

  userPressConfirme() {
    Alert.alert(
      '弹出框标题',
      `登录账号为：${this.state.phoneNum}`,
      [
        {
          text: '确认',
          onPress: (() => { this.jumpToWaiting() })
        },
        {
          text: '取消',
          onPress: (() => { console.log('用户取消')}),
          style: 'cancel'
        }
      ],
      {
        cancelable: false // 禁止用户的点击非alert弹窗区域让弹窗消失行为
      }
    )
  }
  optionSelected() {
    console.log('弹出框确认')
  }

  jumpToWaiting() {
    this.props.onLoginPressed(this.state.phoneNum,123);
  }

  componentDidMount(){ //组件插入后执行
    instructions();
  }
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          一逻辑像素等于{pixelRatio} 实际单位像素
        </Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder={`请输入手机号`}
          onChangeText={(date) => this.updateNum(date)}
        />
        <Text style={styles.textPromptStyle}>
          您输入的手机号是：{this.state.phoneNum}
        </Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder={'请输入密码'}
          secureTextEntry={true}
          onChangeText={this.updatePW}
        />
        <Text style={styles.textPromptStyle}>
          您输入的密码是：{this.state.password}
        </Text>
        <Text style={styles.textPromptStyle}>
          组件的成员变量name={this.name}
        </Text>
        <Text style={styles.textPromptStyle}>
          静态变量{LoginLeaf.mystatic1}
        </Text>
        <Text
          style={styles.bigTextPrompt}
          onPress={() => this.userPressConfirme()}
        >
          确定
        </Text>
        <Text
          style={styles.bigTextPrompt}
          onPress={() => this.userPressAddressBook()}
        >
          通讯录
        </Text>

      </View>
    );
  };

  // 通讯录
  userPressAddressBook() {
    console.log("waiting to do something");
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
    margin: widthOfMargin,
    backgroundColor: '#ddd',
    fontSize: 20,
    height: 45
  },
  textPromptStyle: {
    margin: widthOfMargin,
    fontSize: 20
  },
  bigTextPrompt: {
    margin: widthOfMargin,
    backgroundColor: 'gray',
    color: 'white',
    textAlign: 'center',
    lineHeight: 50,
    fontSize: 20,
    height: 50
  }
});
