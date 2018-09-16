/**
 * @desc 
 * @author Linth
 * @date 2018-08-05 13:40:04
*/
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import PropTypes from 'prop-types';


export default class WaitingLeaf extends Component<Props> {
  // 导航参数配置
  static navigationOptions = {
    title: '登录中'  // 设置导航标题
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('这是组件路径参数: ',this.props.navigation.state)
  }

  componentDidMount() {
    // this.props.navigation.state.routeName = 'Home';
    this.props.screenProps.setWaitingModal(false, '');
  }

  render() {
    return (
      <View>
        <Text style={styles.textPromptStyle}>
          登录使用的手机号：{this.props.phoneNumber}
        </Text>
        <Text
          style={styles.bigTextPrompt}
          onPress={() => this.onGobackPressed()}
        >
          goBack
        </Text>
      </View>
    );
  }

  onGobackPressed() {
    // this.props.onGobackPressed();
    this.props.navigation.goBack();  // 返回操作
  }
}

WaitingLeaf.propTypes = { // 属性确认 isRequired声明是必需的
  phoneNumber: PropTypes.string.isRequired
}

WaitingLeaf.defaultProps = { // 指定默认属性   当没有指定属性时才会生效
  phoneNumber: '123666'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },
  textPromptStyle: {
    fontSize: 20
  },
  bigTextPrompt: {
    width: 300,
    backgroundColor: 'gray',
    color: 'white',
    textAlign: 'center',
    fontSize: 60
  }
});
