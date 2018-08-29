/**
 * @desc 写日记页面
 * @author Linth
 * @date 2018-08-21 22:38:31
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import MCV from '../../commonStyle'

export default class DiaryWriter extends Component<Props> {
  constructor(props) {
    super(props);
    this.diaryTitle = null;
    this.diaryBody = null;
    this.moodCode = 0;
    this.state = {
      moodText: '请选择心情'
    }
  }

  returnPressed() {
    Alert.alert(
      '请确认',
      '你确定要退出吗？',
      [
        {text: 'yes', onPress: this.props.returnPressed},
        {text: 'no'}
      ]
    )
  }

  selectMood() {
    let tempString;
    if (this.moodCode === 5) this.moodCode = 1;
    else this.moodCode++;
    console.log(this.moodCode)
    switch (this.moodCode) {
      case 1:
        tempString = '现在的心情：平静'
        break;
      case 2:
        tempString = '现在的心情：愤怒'
        break;
      case 3:
        tempString = '现在的心情：悲伤'
        break;
      case 4:
        tempString = '现在的心情：高兴'
        break;
      case 5:
        tempString = '现在的心情：痛苦'
        break;
    };
    this.setState({
      moodText: tempString
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <View style={MCV.firstRow}>
          <TouchableOpacity onPress={this.returnPressed.bind(this)}>
            <Text style={MCV.smallButton}>
              返回
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.selectMood.bind(this)}>
            <Text style={MCV.longButton}>
              {this.state.moodText}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ () => this.props.saveDiary(this.moodCode, this.diaryBody, this.diaryTitle) }
          >
            <Text style={MCV.smallButton}>
              保存
            </Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={MCV.titleInputStyle}
          placeholder={'这里写日记标题'}
          onChangeText={(text) => { this.diaryTitle = text }}
        />
        <TextInput
          style={MCV.diaryBodyStyle}
          multiline={true}
          placeholder={'记录一天的收获与感悟'}
          onChangeText={(text) => { this.diaryBody = text }}
        />
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
