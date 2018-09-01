/**
 * @desc ScrollView 组件的基本用法
 * @author Linth
 * @date 2018-08-30 16:43:32
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  RefreshControl,
  Image
} from 'react-native';

export default class LearnRN extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          refreshControl={
              <RefreshControl
                title={'loading...'}
                refreshing={false}
                colors={['#333','#188eee','#ff0000']}
                progressBackgroundColor={'#ff0000'}
              />
          }
        >
          <View style={styles.list_item}>
            <Image
              style={ styles.image_style}
              source={require('../../images/image1.jpg')}
              resizeMode='contain'
            />
            <View style={styles.list_item_right}>
              <Text style={styles.list_item_text}>标题</Text>
              <Text style={styles.list_item_text}>简介11111111</Text>
            </View>
          </View>
          <View>
            <ScrollView
              horizontal={true}
              refreshControl={
                <RefreshControl
                  title={'努力加载中'}
                  // refreshing={true}
                />
              }
            >
              <View style={styles.list_item}>
                <Image
                  style={ styles.image_style}
                  source={require('../../images/image1.jpg')}
                  resizeMode='contain'
                />
                <View style={styles.list_item_right}>
                  <Text style={styles.list_item_text}>标题</Text>
                  <Text style={styles.list_item_text}>简介11111111</Text>
                </View>
              </View>
              <View style={styles.list_item}>
                <Image
                  style={ styles.image_style}
                  source={require('../../images/image1.jpg')}
                  resizeMode='contain'
                />
                <View style={styles.list_item_right}>
                  <Text style={styles.list_item_text}>标题</Text>
                  <Text style={styles.list_item_text}>简介11111111</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  list_item: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center'
    alignItems: 'center',
    padding: 10,
    width: 300
  },
  image_style: {
    width: 80,
    height: 80,
    borderWidth: 2
  },
  list_item_right: {
    marginLeft: 10
  },
  list_item_text: {
    height: 40,
    lineHeight: 40
  }
});