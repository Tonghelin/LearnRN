/**
 * @desc 使用自定义modal组件
 * @author Linth
 * @date 2018-09-15 17:52:49
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Modal,
  ActivityIndicator
} from 'react-native';

export default class LearnRN extends Component<Props> {
  constructor(props) {
    super(props);
    this.state={
      prompt: '数据加载中'
    }
  }

  render() {
    return (
      <Modal
        transparent={true}
        onRequestClose={() => {} }
        animationType={'slide'}
        // visible={this.props.show}
        visible={this.props.show}
      >
        <View
          style={styles.mainViewStyle}
        >
          <View
            style={styles.contentViewStyle}
          >
            <Text
              style={styles.textStyle}
            >
              {this.state.prompt}
            </Text>
            <ActivityIndicator
              animating={true}
              color={'#188eee'}
              size={'large'}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  mainViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.30)'
  },
  contentViewStyle: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10
  },
  textStyle: {
    fontSize: 22,
    paddingBottom: 10
  }
});
