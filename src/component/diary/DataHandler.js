/**
 * @desc 日记数据处理
 * @author Linth
 * @date 2018-08-23 22:30:48
*/

import { AsyncStorage } from 'react-native'; //AsyncStorage是一个简单的、异步的、持久化的Key-Value存储系统，它对于App来说是全局性的。

let angryMood = require('../../images/orange.jpg'); // 导入心情图片
let peaceMood = require('../../images/green.jpg');
let happyMood = require('../../images/red.jpg');
let sadMood = require('../../images/yellow.jpg');
let miseryMood = require('../../images/purple.jpg');

export default class DataHandler {
  static realDiaryList = [];
  static listIndex = 0;
  static getAllTheDiary() { // 获取存储中所有的日记数据
    return new Promise(
      function (resolve, reject) {
        AsyncStorage.getAllKeys().then( // 1. 先获取所有的key
          (Keys) => {
            if (Keys.length === 0){ // 先判断是否有日记
              let returnValue = {
                diaryTime: '还没有日记',
                diaryTitle: '还没有日记',
                diaryBody: ''
              }
              resolve(returnValue);  // Promise 机制中的成功返回
              return;
            };
            AsyncStorage.multiGet(Keys).then(  // 2. 再通过key获取数据
              (results) => {
                let resultsLength = results.length;
                for (let counter = 0; counter < resultsLength; counter++ ) {
                  DataHandler.realDiaryList[counter] = JSON.parse(results[counter][1]);
                }
                DataHandler.bubleSortDiaryList(); // 日记列表排序
                if (resultsLength > 0) {
                  resultsLength--;
                  DataHandler.listIndex = resultsLength;
                  let newMoodIcon;
                  switch (DataHandler.realDiaryList[resultsLength].mood) {
                    case 2:
                      newMoodIcon = angryMood;
                      break;
                    case 3:
                      newMoodIcon = sadMood;
                      break;
                    case 4:
                      newMoodIcon = happyMood;
                      break;
                    case 5:
                      newMoodIcon = miseryMood;
                      break;
                    default:
                      newMoodIcon = peaceMood;
                      break;
                  }
                  let newtitle = DataHandler.realDiaryList[resultsLength].title;
                  let newbody = DataHandler.realDiaryList[resultsLength].body;
                  let ctime = new Date(DataHandler.realDiaryList[resultsLength].time);
                  let timeString = '' + ctime.getFullYear() + '年' + (ctime.getMonth()+1) + '月' +ctime.getDate()+ '日 星期' + (ctime.getDay() + 1);
                  let rValue = {
                    diaryMood: newMoodIcon,
                    diaryTime: timeString,
                    diaryTitle: newtitle,
                    diaryBody: newbody
                  };
                  resolve(rValue);
                } else {
                  let returnValue = {
                    diaryTime: '暂无',
                    diaryTitle: '暂无',
                    diaryBody: '暂无'
                  }
                  resolve( returnValue );
                }
              }
            ).catch(
              (error) => {
                console.log(`error: ${error}`);
              }
            )
          }
        ).catch(
          (error) => {
            console.log(`error: ${error}`);
            AsyncStorage.clear()
            let aValue = {
              diaryTime: '暂无',
              diaryBody: '暂无',
              diaryTitle: '暂无'
            };
            resolve( aValue )
          }
        );
      }
    );
  }



  static bubleSortDiaryList() {
    let tempObj;
    for (let i = 0; i < DataHandler.realDiaryList.length; i++) {
      for (let j = 0; j<DataHandler.realDiaryList.length - i - 1; j++) {
        if (DataHandler.realDiaryList[ j ].index > DataHandler.realDiaryList[j+1].index) {
          tempObj = DataHandler.realDiaryList[ j ];
          DataHandler.realDiaryList[ j ] = DataHandler.realDiaryList[ j+1 ];
          DataHandler.realDiaryList[ j+1 ] = tempObj;
        }
      }
    }
  }

// 请求上一篇日记数据的处理函数
  static getPreviousDiary() {
    if (DataHandler.listIndex === 0) return null;
    DataHandler.listIndex--;
    let resultsLength = DataHandler.listIndex;
    let newMoodIcon;
    switch (DataHandler.realDiaryList[resultsLength].mood) {
      case 2:
        newMoodIcon = angryMood;
        break;
      case 3:
        newMoodIcon = sadMood;
        break;
      case 4:
        newMoodIcon = happyMood;
        break;
      case 5:
        newMoodIcon = miseryMood;
        break;
      default:
        newMoodIcon = peaceMood;
        break;
    }
    let newtitle = DataHandler.realDiaryList[resultsLength].title;
    let newbody = DataHandler.realDiaryList[resultsLength].body;
    let ctime = new Date(DataHandler.realDiaryList[resultsLength].time);
    let timeString = '' + ctime.getFullYear() + '年' + (ctime.getMonth()+1) + '月' +ctime.getDate()+ '日 星期' + (ctime.getDay() + 1);
    return {
      diaryMood: newMoodIcon,
      diaryTime: timeString,
      diaryTitle: newtitle,
      diaryBody: newbody
    }
  }

// 请求下一篇日记数据的处理函数
  static getNextDiary() {
    if (DataHandler.listIndex === (DataHandler.realDiaryList.length -1)) return null;
    DataHandler.listIndex++;
    let resultsLength = DataHandler.listIndex;
    let newMoodIcon;
    switch (DataHandler.realDiaryList[resultsLength].mood) {
      case 2:
        newMoodIcon = angryMood;
        break;
      case 3:
        newMoodIcon = sadMood;
        break;
      case 4:
        newMoodIcon = happyMood;
        break;
      case 5:
        newMoodIcon = miseryMood;
        break;
      default:
        newMoodIcon = peaceMood;
        break;
    }
    let newtitle = DataHandler.realDiaryList[resultsLength].title;
    let newbody = DataHandler.realDiaryList[resultsLength].body;
    let ctime = new Date(DataHandler.realDiaryList[resultsLength].time);
    let timeString = '' + ctime.getFullYear() + '年' + (ctime.getMonth()+1) + '月' +ctime.getDate()+ '日 星期' + (ctime.getDay() + 1);
    return {
      diaryMood: newMoodIcon,
      diaryTime: timeString,
      diaryTitle: newtitle,
      diaryBody: newbody
    }
  }
  static saveDiary(newDiaryMood, newDiaryBody, newDiaryTitle) {
    return new Promise( function (resolve, reject) {
      let currentTime = new Date(); // 当前时间
      let timeString = '';
      let aDiary = Object();
      aDiary.title = newDiaryTitle;
      aDiary.body = newDiaryBody;
      aDiary.mood = newDiaryMood;
      aDiary.time = currentTime;
      aDiary.sectionID = '' + currentTime.getFullYear() + '年' + (currentTime.getMonth()+1) + '月';
      aDiary.index = Date.parse(currentTime);
      AsyncStorage.setItem('' + aDiary.index, JSON.stringify(aDiary)).then(
        () => {
          let totalLength = DataHandler.realDiaryList.length;
          DataHandler.realDiaryList[totalLength] = aDiary;
          DataHandler.listIndex = totalLength;
          let newMoodIcon;
          switch (newDiaryMood) {
            case 2:
              newMoodIcon = angryMood;
              break;
            case 3:
              newMoodIcon = sadMood;
              break;
            case 4:
              newMoodIcon = happyMood;
              break;
            case 5:
              newMoodIcon = miseryMood;
              break;
            default:
              newMoodIcon = peaceMood;
              break;
          }
          let aValue = {
            uiCode: 1,
            diaryTime: timeString,
            diaryTitle: newDiaryTitle,
            diaryMood: newMoodIcon,
            diaryBody: newDiaryBody
          };
          console.log(aValue)
          resolve( aValue );
        }
      ).catch(
        (error) => {
          console.log(`error: ${error}`)
        }
      );
    })
  }


};