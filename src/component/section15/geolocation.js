import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    PermissionsAndroid
} from 'react-native';

export default class LearnRN extends Component<props> {
    constructor(props) {
        super(props);
        this.para = {
            enableHighAccuracy: true,
            timeout: 20000,
            maxmunAge: 1000
        };
        this.state = {
            currentLocation: ''
        }
        this.getPositionResult = this.getPositionResult.bind(this);
    };

    componentWillMount(){
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then(
            (result) => {
                if(result) {
                    return;
                }else {
                    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                        'title': '请授权定位',
                        'message': '定位权限未打开，我不能更好的为您工作'
                    }).then(
                        (result) => {
                            alert(result);
                            //
                        }
                    ).catch(
                        (error) => {
                            console.log('Error:',error);
                        }
                    );
                }
            }
        ).catch(
            (error) => {
                alert(123)
                console.log(errot);
            }
        );
        navigator.geolocation.getCurrentPosition(this.getPositionResult, this.logError, this.para);
        // 地理位置变化监听
        // this.watchID = navigator.geolocation.watchPosition(this.getPositionResult);
    }

    getPositionResult(result) {
        // alert(JSON.stringify(result));
        let currentLocation = JSON.stringify(result);
        this.setState({
            currentLocation
        })
    }

    logError(error) {
        alert('error:'+ error);
    }

    render() {
        return (
            <View>
                <Text>
                    {this.state.currentLocation}
                </Text>
            </View>
        );
    }
}
