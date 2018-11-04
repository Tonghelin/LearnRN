import React, { Component } from 'react';
import {
    View,
    Text,
    Picker,
    StyleSheet
} from 'react-native';

export default class LearnRN extends Component<props> {
    constructor(props) {
        super(props);
        this.options = ['1','选项2','选项3','选项4','选项5'];
        this.state = {
            choice: ''
        };
        this.onValueChange = this.onValueChange.bind(this);

    }

    onValueChange(choice,noUse){
        this.setState({choice});
    }

    render() {
        return(
            <View style={styles.container}>
                <Picker
                    style={styles.picker}
                    // mode={Picker.MODE_DROPDOWN}
                    mode={Picker.MODE_DIALOG}
                    prompt='请选择'
                    selectedValue={this.state.choice}
                    onValueChange={this.onValueChange}
                >
                    {
                        this.options.map((item) =>
                            <Picker.Item label={item} value={item} key={item}/>
                        )
                    }
                </Picker>
                <Text>
                    {'\r\n\r\n\r\n'} 你选择了：{this.state.choice}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#188eee',
    },
    picker: {
        width: 300,
        height: 20
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10
    }
})
