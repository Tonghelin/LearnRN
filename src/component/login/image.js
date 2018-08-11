/**
 * @desc Image组件 之 加载网络图片资源
 * @author Linth
 * @date 2018-08-07 01:07:23
*/
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';

var imageAddress = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
let imageHeight = 0;

export default class LearnRN extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      imageHeight: 0
    }
  }

  componentWillMount(){
    let imageSource = {
      uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    }
    // Image.getSize(imageSource, (width, height) => {  // 获取图片宽高，react-native框架会下载这张图片，摒弃将这张图片保存在缓存中， 可以作为预加载图片资源的一个方法
    //   console.log('图片的宽是：', height);
    //   this.setState({
    //     imageHeight: height
    //   });
    //   imageHeight = height
    //   console.log(this.state.imageHeight)
    // }, (error) => {
    //     console.log('获取图片宽高失败了emmmmmm')
    // })

    Image.prefetch(imageSource).then(  // 还可以使用 Image 的静态函数 prefetch 函数 来预下载图片
      (result) => { console.log(result)} // 当预下载成功返回true 不需要做任何处理
    ).catch(
      (error) => { console.log('出错了啊。。。') }
    )
  }

  render() {
    return (
      <View>
        <Image
          style={styles.image_con}
          source={{uri: imageAddress}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image_con: {
    width: 300,
    height: imageHeight
  }
});