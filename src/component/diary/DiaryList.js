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
  StatusBar,
  ListView,
  RefreshControl
} from 'react-native';
import MCV from '../../commonStyle/index';

let orange = require('../../images/orange.jpg');

export default class DiaryList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      diaryListDataSource: new ListView.DataSource({
        rowHasChanged: (oldRow, newRow) => oldRow !== newRow
      })
    };
  }
  componentWillMount() {
    if (this.props.diaryList === null) return;
    this.setState({
      diaryListDataSource: this.state.diaryListDataSource.cloneWithRows(this.props.diaryList)
    });

    console.log(this.props)
  }
  componentWillReceiveProps( nextProps ) { // 这个函数很重要
    console.log(nextProps)
    this.setState({
      diaryListDataSource: this.state.diaryListDataSource.cloneWithRows(nextProps.diaryList)
    });
  }

  updateSearchKeyword(keyWord) {
    this.props.searchKeyword(keyWord);
  }

  renderListItem(log, sectionID, rowID) {
    console.log(log)
    return (
      <TouchableOpacity
        onPress={ () => this.props.selectListItem(rowID)}
      >
        <View style={MCV.secondRow}>
          <Image
            style={MCV.moodStyle}
            source={log.mood}
          />
          <View style={MCV.subViewInReader}>
            <Text style={MCV.textInReader}>
              {log.title}
            </Text>
            <Text style={MCV.textInReader}>
              {log.time}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
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

        {
          (this.props.diaryList.length !== 0)?
            (
              <ListView
                refreshControl={
                  <RefreshControl
                    title={'数据加载中...'}
                    refreshing={false}
                  />
                }
                dataSource={this.state.diaryListDataSource}
                renderRow={this.renderListItem.bind(this)}
              >

              </ListView>
            ):
            (
              <View Style={{flex:1, justifyContent: 'center'}}>
                <Text style={{fontSize: 20}}>还没有日记哦</Text>
              </View>
            )
        }
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
