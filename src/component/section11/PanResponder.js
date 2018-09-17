/**
 * @desc 11.4 手势识别处理例程
 * @author Linth
 * @date 2018-09-17 22:20:13
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  PanResponder,
  Dimensions,
  ProgressViewIOS,
  Platform,
  ProgressBarAndroid
} from 'react-native';

var totalWidth = Dimensions.get('window').width;

export default class LearnRN extends Component<Props> {
  constructor(props) {
    super(props);
    this.watcher = null;   // 成员变量用来保存监视器
    this.state = {
      progress: 0
    };
    this._onPanResponderGrant = this._onPanResponderGrant.bind(this);
    this._onPanResponderMove = this._onPanResponderMove.bind(this);
  }
  componentWillMount(){
    this.watcher = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: this._onPanResponderGrant,
      onPanResponderMove: this._onPanResponderMove,
    })
  }

  _onPanResponderGrant(e, gestureState) {
    console.log('我要变身了');
    let touchPointX = gestureState.x0;
    let progress;
    if (touchPointX < 20) {
      progress = 0;
    } else {
      if ( touchPointX > (totalWidth - 40 ) ) {
        progress = 1;
      } else {
        progress = (touchPointX - 20)/(totalWidth - 40 );
      }
    }
    this.setState({
      progress
    })

  }

  _onPanResponderMove(e, gestureState) {
    console.log('移动中');
    let touchPointX = gestureState.moveX;
    let progress;
    if (touchPointX < 20 ) {
      progress = 0;
    } else {
      if (touchPointX > (totalWidth - 40 ) ){
        progress = 1;
      } else {
        progress = (touchPointX - 20)/(totalWidth - 40 );
      }
    }
    this.setState({
      progress
    });
  }


  render() {
    return (
      <View
        style={styles.container}
      >
        {
          (
            (Platform.OS === 'ios')?
              (
                <ProgressViewIOS
                  style={styles.ProgressViewStyle}
                  progress={this.state.progress}
                />
              ):(
                <ProgressBarAndroid
                  style={styles.ProgressViewStyle}
                  styleAttr='Horizontal'
                  indeterminate={false}
                  progress={this.state.progress}
                />
              )
          )
        }
        <Text style={styles.textStyle}>
          你选择了{Math.round(this.state.progress*100)}
        </Text>
        <View style={styles.touchViewStyle}
              {...this.watcher.panHandlers}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  ProgressViewStyle:{
    width: totalWidth - 40,
    left: 20,
    top: 60
  },
  touchViewStyle:{
    width: totalWidth - 40,
    height: 40,
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 20,
    top: 32,
  },
  textStyle: {
    fontSize: 30,
    left: 20,
    top: 70
  }
});