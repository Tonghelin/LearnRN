/**
 * @desc 日记详情页面
 * @author Linth
 * @date 2018-08-21 21:59:33
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

let orangeImg = require('../../images/orange.jpg');

export default class DiaryReader extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <View style={MCV.firstRow}>
          <TouchableOpacity
            onPress={this.props.returnToDiaryLiat}
          >
            <Text style={MCV.middleButton}>
              返回
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.props.readingPreviousPressed}
          >
            <Text style={MCV.middleButton}>
              上一篇
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.props.readingNextPressed}
          >
            <Text style={MCV.middleButton}>
              下一篇
            </Text>
          </TouchableOpacity>
        </View>
        <View style={MCV.secondRow}>
          <Image
            style={MCV.moodStyle}
            source={this.props.diaryMood}
          />
          <View style={MCV.subViewInReader}>
            <Text style={MCV.textInReader}>
              {this.props.diaryTitle}
            </Text>
            <Text style={MCV.textInReader}>
              {this.props.diaryTime}
            </Text>
          </View>
        </View>
        <View style={[MCV.diaryBodyStyle,{color: 'black'}]}>
          <TextInput
            multiline={true}
            editable={false}
            value={this.props.diaryBody}
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
