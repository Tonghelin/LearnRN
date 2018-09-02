/**
 * @desc ListView 简单的列表示例
 * @author Linth
 * @date 2018-09-01 15:52:25
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ListView,
  TouchableOpacity,
  Image,
  RefreshControl
} from 'react-native';
import MCV from '../../commonStyle/index';

export default class LearnRN extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource(
        {
          rowHasChanged: (oldRow, newRow) => oldRow !== newRow,
          sectionHeaderHasChanged: (oldSH, newSH) => oldSH !== newSH
        }
      )
    }
  }

  static data = {dataSource:[{"title":"We","body":"Eee","mood":2,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535885475000},{"title":"Eee","body":"Ddddd","mood":1,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535885491000},{"title":"123","body":"123","mood":4,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535885564000},{"title":"Wee","body":"Qwe","mood":4,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535885609000},{"title":"12323123123","body":"12312312312","mood":2,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535886077000},{"title":"12323123123","body":"12312312312","mood":2,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535886087000},{"title":"4534533","body":"45345353","mood":3,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535886129000},{"title":"Rrrr","body":"Rrrrrrr","mood":1,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535886171000},{"title":"12312311","body":"2312312312","mood":1,"time":"NaN年NaN月NaN日 星期NaN","sectionID":"2018年9月","index":1535886247000},{"title":"Eqweqweq","body":"Weqweqweqwe","mood":4,"time":"NaN年NaN月NaN日 星期NaN","sectionID":"2018年9月","index":1535886257000}]}

  componentWillMount() {

    let newListWithSection = [];
    let sec1 = 'select1';
    let sec2 = 'select2';
    let sec3 = 'select3';
    newListWithSection[sec1] = LearnRN.data.dataSource;
    newListWithSection[sec2] = LearnRN.data.dataSource;
    newListWithSection[sec3] = LearnRN.data.dataSource;
    let fakeSections = [sec1, sec2, sec3];


    this.setState({
      // dataSource: this.state.dataSource.cloneWithRows(LearnRN.data.dataSource)
      dataSource: this.state.dataSource.cloneWithRowsAndSections(newListWithSection, fakeSections)
    //   dataSource: this.state.dataSource.cloneWithRows([{"title":"We","body":"Eee","mood":2,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535885475000},{"title":"Eee","body":"Ddddd","mood":1,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535885491000},{"title":"123","body":"123","mood":4,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535885564000},{"title":"Wee","body":"Qwe","mood":4,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535885609000},{"title":"12323123123","body":"12312312312","mood":2,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535886077000},{"title":"12323123123","body":"12312312312","mood":2,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535886087000},{"title":"4534533","body":"45345353","mood":3,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535886129000},{"title":"Rrrr","body":"Rrrrrrr","mood":1,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535886171000},{"title":"12312311","body":"2312312312","mood":1,"time":"NaN年NaN月NaN日 星期NaN","sectionID":"2018年9月","index":1535886247000},{"title":"Eqweqweq","body":"Weqweqweqwe","mood":4,"time":"NaN年NaN月NaN日 星期NaN","sectionID":"2018年9月","index":1535886257000}])

    })
  }



  renderItem(log, sectionID, rowID) {
    console.log(log.time)
    return (
      <TouchableOpacity
        // onPress={() => this.props.selectListItem(rowID)}
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

  // 定义如何渲染每个分栏
  renderSectionHeader(sectionData, sectionID) {
    return (
      <View style={MCV.section}>
        <Text style={{backgroundColor: 'red', marginTop: 10, padding: 10}}>
          {`${sectionID}`}
        </Text>
      </View>
    )
  }

  // 定义如何渲染首尾栏
  renderHeader() {
    return (
      <View style={MCV.section}>
        <Text style={{backgroundColor: '#188eee', marginTop: 10, padding: 10}}>
          我是首栏
        </Text>
      </View>
    )
  }

  renderFooter() {
    return (
      <View style={MCV.section}>
        <Text style={{backgroundColor: '#188eee', marginTop: 10, padding: 10}}>
          我是尾栏
        </Text>
      </View>
    )
  }

  renderSeparator(){
    return (
      <View style={MCV.section}>
        <Text style={{backgroundColor: 'yellow', marginTop: 10, padding: 10}}>
          我是Separator
        </Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderItem.bind(this)}
          refreshControl={
            <RefreshControl
              title={'loading...'}
            />
          }
          renderSectionHeader={this.renderSectionHeader.bind(this)}
          renderHeader={this.renderHeader.bind(this)}
          renderFooter={this.renderFooter.bind(this)}
          renderSeparator={this.renderSeparator.bind(this)}
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