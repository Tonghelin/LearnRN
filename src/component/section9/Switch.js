/**
 * @desc Switch 开关组件的运用
 * @author Linth
 * @date 2018-09-06 16:14:25
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Switch
} from 'react-native';

export default class LearnRN extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      aSwitch: false
    };
    this.onSwitchChange = this.onSwitchChange.bind(this);
  }
  onSwitchChange() {
    this.setState({
      aSwitch: !this.state.aSwitch
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{padding: 50}}>
          <Switch
            onValueChange={this.onSwitchChange}
            value={this.state.aSwitch}
          />
        </View>
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
