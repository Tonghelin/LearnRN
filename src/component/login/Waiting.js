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
  constructor(props) {
    super(props);
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
    this.props.onGobackPressed();
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
