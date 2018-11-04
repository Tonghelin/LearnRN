import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    PermissionsAndroid,
    TouchableOpacity,
    Vibration
} from 'react-native';

export default class LearnRN extends Component<props> {
    constructor(props) {
        super(props);
        this.state = {
            vibrate: '未开启震动'
        }
        this.startVibration = this.startVibration.bind(this);
    };



    //手机震动
    startVibration() {
        let pattern = [0, 500, 200, 500];
        Vibration.vibrate( pattern );
        this.setState({
            vibrate: '震动中....'
        });
    }

    logError(error) {
        alert('error:'+ error);
    }

    render() {
        return (
            <View style={ styles.container}>
                <Text>
                    {this.state.vibrate}
                </Text>
                <View>
                    <TouchableOpacity
                        style={styles.vibration_button}
                        onPress={this.startVibration}
                    >
                        <Text>
                            点击开启震动
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },
    vibration_button: {
        width: 100,
        height: 50,
        borderWidth: 1,
        backgroundColor: '#188eee',
    }
})
