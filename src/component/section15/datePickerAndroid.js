import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    DatePickerAndroid
} from 'react-native';

export default class LearnRN extends Component<props> {
    constructor(props) {
        super(props);

    };
    componentWillMount() {
        let today = new Date();
        let theMinDate = new Date(2010,11,3);
        let theMaxDate = new Date(2020,1,28);
        let option = {
            date: today,
            minDate: theMinDate,
            maxDate: theMaxDate
        };
        DatePickerAndroid.open(option).then(
            (result) => {
                if (result.action === DatePickerAndroid.dismissedAction) {
                    // 用户取消选择
                    console.log('用户没有选择日期');
                    alert(123)
                } else {
                    // 用户选择了
                    console.log('用户选择了'+ result.year + '年-'+ (result.month+1) + '月'+ result.day + '日');
                    alert('用户选择了'+ result.year + '年-'+ (result.month+1) + '月'+ result.day + '日');
                }
            }
        ).catch(
            (error) => {
                console.log('Error'+ error);
            }
        );
    }

    render() {
        return null;
    }
}
