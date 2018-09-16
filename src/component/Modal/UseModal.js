/**
 * @desc 10.8.2 使用自定义组件
 * @author Linth
 * @date 2018-09-14 01:41:04
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
import WaitingModal from './WaitingModal';

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
  constructor(props) {
    super(props);
    this.state = {
      showWaitingModal : false,
      modalPrompt : ''
    };
    this.setWaitingModal = this.setWaitingModal.bind(this);
  }

  setWaitingModal(show, aPrompt) {
    this.setState({
      showWaitingModal: show,
      modalPrompt : aPrompt
    });
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <SimpleApp
          screenProps={{setWaitingModal: this.setWaitingModal}}
        />
        <WaitingModal
          show={this.state.showWaitingModal}
          // show={true}
          prompt={this.state.modalPrompt}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
