/**
 * @desc 9.2  ios 进度条组件
 * @author Linth
 * @date 2018-09-05 17:15:01
*/


import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ProgressViewIOS
} from 'react-native';

export default class LearnRN extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
    this.progressTimer = null;
    this.updataProgress.bind(this);
  }

  componentDidMount() {
    this.updataProgress();

  }
   updataProgress() {
    var progress = (this.state.progress + 0.0025);
    // progress = progress >1? 1:progress;

    this.setState({progress});
    this.progressTimer = window.requestAnimationFrame(
      () => this.updataProgress()
    );
    if (progress > 1) { // progress取值 0-1之间，超过1时停止定时器；
       window.cancelAnimationFrame( this.progressTimer );
     }
   }

  componentWillUnmount() {
    window.cancelAnimationFrame( this.progressTimer );
  }

  render() {
    return (
      <View>
        <ProgressViewIOS
          style={{top: 50}}
          progress={this.state.progress}
        />
        <View style={{top: 100}}>
          <Text>
            {this.state.progress}
          </Text>
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