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
  Image
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

  componentWillMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows({
        dataSource: {
          title: '123',
          mood: '111',
          time: '10:20'
        }
      })
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