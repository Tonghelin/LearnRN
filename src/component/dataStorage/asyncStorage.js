/**
 * @desc 7.3 数据持久化操作之存储数据与读取数据
 * @author Linth
 * @date 2018-08-19 15:10:41
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  AsyncStorage
} from 'react-native';
let data = require('../../data/SimpleSample.json');
let arrData = [
  ['name1', '1'],
  ['name2', '2'],
  ['name3', '3'],
  ['键', '值']
]
console.log('数据持久化操作', data);

export default class LearnRN extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      storageData: ''
    }
  }

  componentWillMount() {
    // 存储  单个数据
    // 使用Promise机制后续处理的方法
    AsyncStorage.setItem('name', '数据存储').then(
      () => {
        console.log('数据存储成功了');
      }
    ).catch(
      (error) => {
        console.log('error: ', error.message );
      }
    )

    // try...catch 机制
    // try {
    //   AsyncStorage.setItem('name', 123);
    //   console.log('try...catch 机制')
    // } catch (e) { // try...catch 机制 无法捕捉到错误
    //   console.log('try...catch 机制 error: ', e.message);
    // }

    // 一次存储  多个数据

    AsyncStorage.multiSet(arrData).then(
      () => {
        console.log('一次存储多个数据成功了：');
      }
    ).catch(
      (error) => {
        alert('失败')
      }
    )
  }

  componentDidMount() {
    // 读取 单个数据
    AsyncStorage.getItem('name').then(
      (res) => {
        console.log('AsyncStorage.getItem("keyname")读取数据成功了：', res);
        this.setState({
          storageData: res
        })
      }
    ).catch(
      (error) => {
        console.log('读取数据失败')
      }
    )

    // 先 得到当前存储的所有键  再 读取 多个数据
    AsyncStorage.getAllKeys().then(
      (keys) => {
        console.log('当前存储的所有键', keys);
        for (let count=0; count<keys.length; count++) {
          console.log( `当前key_${count}: `, keys[count]); // 拿到的key
          // 取值
          AsyncStorage.getItem(keys[count]).then(
            (res) => {
              console.log(`当前key_${keys[count]} 的值是：`, res);
            }
          ).catch(
            (error) => {
              console.log('获取key键的值失败了：', error)
            }
          )
        }
      }
    ).catch(
      (error) => {
        console.log('读取当前所有的key键失败了', error);
      }
    )

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          {`读取的数据:  ${this.state.storageData}`}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 30
  }
});