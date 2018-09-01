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

  renderItem(log, sectionID, rowID) {
    return (
      <TouchableOpacity
        onPress={() => this.props.selectListItem(rowID)}
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