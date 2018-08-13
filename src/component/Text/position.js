/**
 * @desc 获得组件的位置
 * @author Linth
 * @date 2018-08-13 17:07:27
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput
} from 'react-native';

export default class LearnRN extends Component<Props> {
  componentDidMount() {
    var aref = this.tempfunc.bind(this);
    window.setTimeout(aref, 1);
  }

  tempfunc() {
    this.refs.aTextInputRef.measure( this.getTextInputPosition );  // 获取位置
  }

  getTextInputPosition(x, y, width, height, px, py) {
    console.log('获取组件的位置信息');
    console.log(x,y,width,height,px,py);
    console.log('X offfset to frame:', x);
    console.log('Y offfset to frame:', y);
    console.log('Component width is:', width);
    console.log('Component height is:', height);
    console.log('X offfset to page:', px);
    console.log('Y offfset to page:', py);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={ {borderWidth: 2}}>
          <TextInput
            style={styles.text_input_style}
            ref={'aTextInputRef'}
            defaultValue='Ajfg您好'
            underlineColorAndroid='white'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text_input_style: {
    width: 200,
    height: 55,
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 10
  }
});
