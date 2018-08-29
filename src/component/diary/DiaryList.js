/**
 * @desc
 * @author Linth
 * @date 2018-08-21 21:15:39
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar
} from 'react-native';
import MCV from '../../commonStyle/index';

let orange = require('../../images/orange.jpg');

export default class DiaryList extends Component<Props> {
  constructor(props) {
    super(props);
    console.log(props);
  }

  updateSearchKeyword(keyWord) {
    this.props.searchKeyword(keyWord);
  }


  render() {
    return (
      <View style={MCV.container}>
        {/* 隐藏状态栏*/}
        <StatusBar hidden={true}/>
        <View style={MCV.firstRow}>
          <View style={styles.borderWidth}>
            <TextInput
              style={MCV.searchBarTextInput}
              autoCapitalize="none"
              placeholder='输入关键字搜索'
              clearButtonMode='while-editing'
              onChangeText={this.updateSearchKeyword.bind(this)}
            />
          </View>
          <TouchableOpacity
            onPress={this.props.writeDiary}
          >
            <Text style={MCV.middleButton}>
              写日记
            </Text>
          </TouchableOpacity>
        </View>
        <View style={MCV.diaryAbstractList}>
          <View style={MCV.secondRow}>
            <Image
              style={MCV.moodStyle}
              // source={require('../../images/orange.jpg')}
              source={this.props.data.diaryMood}
            />
            <View style={MCV.subViewInReader}>
              <TouchableOpacity
                onPress={this.props.selectListItem}
              >
                <Text style={MCV.textInReader}>
                  {this.props.data.diaryTitle}
                </Text>
              </TouchableOpacity>
              <Text style={MCV.textInReader}>
                {this.props.data.diaryTime}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  border_style: {
    borderWidth: 1
  }
});
