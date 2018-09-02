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
          rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        }
      )
    }
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dataSource: [{
  //       title: '123',
  //       mood: '111',
  //       time: '10:20'
  //     },{
  //       title: '123',
  //       mood: '111',
  //       time: '10:20'
  //     }]
  //   }
  // }

  static data = {dataSource:[{"title":"We","body":"Eee","mood":2,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535885475000},{"title":"Eee","body":"Ddddd","mood":1,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535885491000},{"title":"123","body":"123","mood":4,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535885564000},{"title":"Wee","body":"Qwe","mood":4,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535885609000},{"title":"12323123123","body":"12312312312","mood":2,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535886077000},{"title":"12323123123","body":"12312312312","mood":2,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535886087000},{"title":"4534533","body":"45345353","mood":3,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535886129000},{"title":"Rrrr","body":"Rrrrrrr","mood":1,"time":"2018年9月2日 星期1","sectionID":"2018年9月","index":1535886171000},{"title":"12312311","body":"2312312312","mood":1,"time":"NaN年NaN月NaN日 星期NaN","sectionID":"2018年9月","index":1535886247000},{"title":"Eqweqweq","body":"Weqweqweqwe","mood":4,"time":"NaN年NaN月NaN日 星期NaN","sectionID":"2018年9月","index":1535886257000}]}

  componentWillMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(LearnRN.data.dataSource)
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