/**
 * @desc Image组件 之 加载静态图片资源 require
 * @author Linth
 * @date 2018-08-07 15:40:45
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';
let nativeImageSource = require('nativeImageSource');

export default class LearnRN extends Component<Props> {
  render() {
    // let ades = {
    //   ios: 'story-background',
    //   widht: 100,
    //   height: 100
    // }
    return (
      <View style={styles.container}>
        <Image
          style={styles.image_con}
          source={require('../../images/image1.jpg')}
          resizeMode={'center'}
          // resizeMode={'contain'}
          // resizeMode={'cover'}
          // resizeMode={'stretch'}
          // resizeMode={'repeat'}
        />
        {/*<Image*/}
          {/*source={ nativeImageSource(ades)}*/}
        {/*/>*/}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row'
  },
  image_con: {
    width: 300,
    height: 300,
    borderWidth: 5,
    borderColor: 'red',
    backgroundColor: '#188eee',
    borderRadius: 150
  }
});