/**
 * @desc  WebView组件
 * @author Linth
 * @date 2018-09-23 21:17:41
*/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  WebView,
  StatusBar,
  TouchableOpacity,
  TextInput
} from 'react-native';

export default class LearnRN extends Component<Props> {
  constructor(porps) {
    super(porps);
    this.state = {
      source: {
        uri: 'https://www.baidu.com'
      },
      backButtonEnabled: true,
      forwardButtonEnabled: false,
      status: 'No Page Loaded',
    };
    // this.backButtonEnable = true;
    this.status = 'No Page Loaded';
    this.inputURL= '';
    this.goBack = this.goBack.bind(this);
    this.goForward = this.goForward.bind(this);
    this.pressGoButton = this.pressGoButton.bind(this);
    this.onNavigationStateChange = this.onNavigationStateChange.bind(this);
  }

  onNavigationStateChange(navState) {
    console.log(navState);
    this.setState({
      backButtonEnabled: navState.canGoBack,
      forwardButtonEnabled: navState.canGoForward,
      status: navState.title
    })
  }
  goBack() {
    this.refs.webViewRef.reload();
  }
  goForward() {
    this.refs.webViewRef.goForward();
  }

  pressGoButton() {
    let source = {};
    source.uri=this.inputURL.toLowerCase();
    this.setState({
      source
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <View style={[styles.addressBarRow]}>
          <TouchableOpacity
            onPress={this.goBack}
            style={this.state.backButtonEnabled?styles.navButton:styles.disableButton}
          >
            <Text>{'<'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.goForward}
            style={this.state.forwardButtonEnabled?styles.navButton:styles.disableButton}
          >
            <Text>{'>'}</Text>
          </TouchableOpacity>
          <TextInput
            ref='urlInputRef'
            autoCapitalize='none'
            defaultValue={this.state.url}
            onSubmitEditing={this.pressGoButton}
            onChangeText={(newText)=> {this.inputURL=newText}}
            clearButtonMode='while-editing'
            style={styles.addressBarTextInput}
          />
          <TouchableOpacity
            onPress={this.pressGoButton}
          >
           <View style={styles.goButton}>
             <Text>
               Go!
             </Text>
           </View>
          </TouchableOpacity>
        </View>
        <WebView
          ref='webViewRef'
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          source={this.state.source}
          javaScriptEnabled={true}
          domStorageEnable={false}
          onNavigationStateChange={this.onNavigationStateChange}
          satrtInLoadingState={true}
        />
        <View
          style={styles.statusBar}
        >
          <Text style={styles.statusBarText}>
            {this.state.status}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },
  addressBarRow: {
    flexDirection: 'row',
    padding: 8
  },
  webView: {
    backgroundColor: 'white',
    height: 350
  },
  addressBarTextInput: {
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderRadius: 3,
    borderWidth: 1,
    height: 24,
    paddingLeft: 10,
    paddingTop: 3,
    paddingBottom: 3,
    flex: 1,
    fontSize: 14
  },
  navButton: {
    width: 20,
    padding: 3,
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderRadius: 3
  },
  disableButton: {
    width: 20,
    padding: 3,
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderColor: 'transparent',
    borderRadius: 3
  },
  goButton: {
    height: 24,
    padding: 3,
    marginLeft: 8,
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderRadius: 3,
    alignSelf: 'stretch'
  },
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    height: 22
  },
  statusBarText: {
    color: 'white',
    fontSize: 13
  }
});
