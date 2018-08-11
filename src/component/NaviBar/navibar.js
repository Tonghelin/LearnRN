/**
 * @desc
 * @author Linth
 * @date 2018-08-07 23:22:04
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Dimensions
} from 'react-native';

let { width } = Dimensions.get('window');
let naviButtonWidth = width / 4;
let naviButtonHeight = naviButtonWidth * 0.75;
// console.log(naviButtonHeight)


export default class NaviBar extends Component<Props> {
  constructor(props) {
    super(props);
    this._naviTab0Pressed = this._naviTab0Pressed.bind(this);
    this._naviTab1Pressed = this._naviTab1Pressed.bind(this);
    this._naviTab2Pressed = this._naviTab2Pressed.bind(this);
    this._naviTab3Pressed = this._naviTab3Pressed.bind(this);
  }

  componWillMount() {
    this.buttonColors = this.props.naviBarStatus.map(
      function (aNumber) {
        if (aNumber == 0) return 'white';
        return 'gray';
      }
    )
  }

  _naviTab0Pressed() {
    this.props.onNavibarPress(0);
  }
  _naviTab1Pressed() {
    this.props.onNavibarPress(1);
  }
  _naviTab2Pressed() {
    this.props.onNavibarPress(2);
  }
  _naviTab3Pressed() {
    this.props.onNavibarPress(3);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={ styles.button}
          onPress={() => { alert('123')}}
        >
          <View style={[styles.button, { backgroundColor: this.buttonColors[0]}]}>
            <Text style={styles.text_style}>
              栏目1
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={[styles.button, { backgroundColor: this.buttonColors[0]}]}>
            <Text style={styles.text_style}>
              栏目2
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={[styles.button, { backgroundColor: this.buttonColors[0]}]}>
            <Text style={styles.text_style}>
              栏目3
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={[styles.button, { backgroundColor: this.buttonColors[0]}]}>
            <Text style={styles.text_style}>
              栏目4
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
NaviBar.propTypes = {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  button: {
    width: naviButtonWidth,
    height: naviButtonHeight,
    justifyContent: 'center'
  },
  text_style: {
    fontSize: 20,
    textAlign: 'center'
  }
});