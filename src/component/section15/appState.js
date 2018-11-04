import React, { Component } from 'react';
import {
    View,
    Text,
    AppState
} from 'react-native';

export default class LearnRN extends Component<props> {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // 启动监听
        AppState.addEventListener('change',this._handleAppStateChange.bind(this));
    }
    componentWillUnmount() {
        // 释放监听
        AppState.removeEventListener('change',this._handleAppStateChange.bind(this));
    }
    _handleAppStateChange(newSate) { // 监听到的状态
        alert(newSate)
        console.log('123')
    }
    render(){
        return null;
    }
}

