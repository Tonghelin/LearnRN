/**
 * @desc react native 应用实现步骤 日记例程
 * @author Linth
 * @date 2018-08-21 06:57:21
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  AsyncStorage
} from 'react-native';
import MCV from '../../commonStyle/index';
import DiaryList from './DiaryList';
import DiaryReader from './DiaryReader';
import DiaryWriter from "./DiaryWriter";
import DataHandler from'./DataHandler';

let { container, smallButton } = MCV;

console.log('来自MCV的数据', container )

export default class LearnRN extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      uiCode: 1,
      diaryMood: null,
      diaryTime: '读取中...',
      diaryTitle: '读取中...',
      diaryBody: '读取中...'
    };

    this.bindAllMyFunction();  // 执行回调函数绑定操作
    DataHandler.getAllTheDiary().then(
      (res) => {
        this.setState(res);
        console.log(this.state)
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    );
  }

  componentWillMount() {
    // AsyncStorage.clear()
  }

  bindAllMyFunction() {
    this.saveDiaryAndReturn = this.saveDiaryAndReturn.bind(this);
    this.writeDiary = this.writeDiary.bind(this);
    this.returnPressed = this.returnPressed.bind(this);
    this.selectListItem = this.selectListItem.bind(this);
    this.readingPreviousPressed =this.readingPreviousPressed.bind(this);
    this.readingNextPressed = this.readingNextPressed.bind(this);
    this.searchKeyword = this.searchKeyword.bind(this);
  }

  readingPreviousPressed() { // 请求上一篇日记
    let previousDiary = DataHandler.getPreviousDiary();
    if (previousDiary === null ) return;
    this.setState(previousDiary);
  }

  readingNextPressed() { // 请求下一篇日记
    let nextDiary = DataHandler.getNextDiary();
    if (nextDiary === null) return;
    this.setState(nextDiary);
  }

  returnPressed() {
    this.setState({
      uiCode: 1
    })
  }

  // 写日记界面保存日记并返回日记列表界面的处理函数
  saveDiaryAndReturn(newDiaryMood, newDiaryBody, newDiaryTitle) {
    // alert(DataHandler.saveDairy)
    DataHandler.saveDiary(newDiaryMood, newDiaryBody, newDiaryTitle).then(
      (result) => {
        this.setState(result);
      }
    ).catch(
      (error) => {
        console.log(`保存日记失败了哦...${error}`)
      }
    )
  }

  writeDiary() {
    this.setState({
      uiCode: 3
    });
  }

  selectListItem() {
    this.setState({
      uiCode: 2
    });
  }

  searchKeyword(keyword) {
    console.log(`search keyword is : ${keyword}`);
  }

  showDiaryList() {
    return (
      <DiaryList
        data={this.state}
        writeDiary={this.writeDiary}
        selectListItem={this.selectListItem}
        searchKeyword={this.searchKeyword}
      />
    );
  }

  showDiaryReader() {
    return (
      <DiaryReader
        returnToDiaryLiat={this.returnPressed}
        diaryMood={this.state.diaryMood}
        diaryTitle={this.state.diaryTitle}
        diaryBody={this.state.diaryBody}
        diaryTime={this.state.diaryTime}
        readingPreviousPressed={this.readingPreviousPressed}
        readingNextPressed={this.readingNextPressed}
      />
    );
  }

  showDiaryWriter() {
    return (
      <DiaryWriter
        saveDiary={this.saveDiaryAndReturn}
        returnPressed={this.returnPressed}
      />
    );
  }



  render() {
    if ( this.state.uiCode === 1 ) return this.showDiaryList();
    if ( this.state.uiCode === 2 ) return this.showDiaryReader();
    if ( this.state.uiCode === 3 ) return this.showDiaryWriter();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});