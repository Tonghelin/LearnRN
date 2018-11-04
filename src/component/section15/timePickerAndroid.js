import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TimePickerAndroid
} from 'react-native';
export default class LearnRN extends Component<props> {
    constructor(props){
        super(props);
        this.state = {
            time: 0
        }
    };

    componentWillMount(){
        TimePickerAndroid.open().then(
            (result) => {
                if (result.action !== TimePickerAndroid.timeSetAction) {
                    console.log('用户没有选择时间');
                } else {
                    console.log('用户选择的时间是：'+ result.hour+':'+ result.minute);
                    let time =  result.hour+':'+ result.minute;
                    this.setState({
                        time:time
                    })
                }
            }
        ).catch(
            (error) => {
                console.log('Error:'+ error);
            }
        )
    }

    render() {
        return (
            <View>
                <Text>
                    {this.state.time}
                </Text>
            </View>
        )
    }
}
