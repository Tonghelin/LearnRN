import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    PermissionsAndroid,
    ToastAndroid
} from 'react-native';

export default class Loacl extends Component<props>{
    constructor(props) {
        super(props);
        this.requestCarmeraPermission = this.requestCarmeraPermission.bind(this);
        this.requestMultiplePermission = this.requestMultiplePermission.bind(this);
    }

    componentWillMount() {
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA).then(
            (result) => {
                if (result) {
                    ToastAndroid.show('相机权限获取成功，做点什么...'+result,ToastAndroid.SHORT)
                    return;
                };
                PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        //第一次请求拒绝后提示用户你为什么要这个权限
                        'title': '我要相机权限',
                        'message': '没权限我不能工作，同意就好了'
                    }
                ).then(
                    (result) => {
                        if (result === 'granted') {
                            ToastAndroid.show('成功授予相机权限',ToastAndroid.SHORT)
                        } else if (result === 'denied'){
                            ToastAndroid.show('下次询问',ToastAndroid.SHORT)
                        } else {
                            ToastAndroid.show('永久性拒绝访问相机权限',ToastAndroid.SHORT)
                        }
                    }
                ).catch (
                    (error) => {
                        console.log('访问出错',error)
                    }
                )
            }
        ).catch(
            (error) => {
                ToastAndroid.show('访问出错',ToastAndroid.SHORT)
            }
        );
    }

    camera() {
        console.log('获取相机权限');
    }
    show(data) {
        ToastAndroid.show(data,ToastAndroid.SHORT)
    }
    async requestCarmeraPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    //第一次请求拒绝后提示用户你为什么要这个权限
                    'title': '我要相机权限',
                    'message': '没权限我不能工作，同意就好了'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.show("你已获取了相机权限")
            } else {
                this.show("获取相机失败")
            }
        } catch (err) {
            this.show(err.toString())
        }
    }



    async requestMultiplePermission() {
        try {
            const permissions = [
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                PermissionsAndroid.PERMISSIONS.CAMERA
            ]
            //返回得是对象类型
            const granteds = await PermissionsAndroid.requestMultiple(permissions)
            var data = "是否同意地址权限: "
            if (granteds["android.permission.ACCESS_FINE_LOCATION"] === "granted") {
                data = data + "是\n"
            } else {
                data = data + "否\n"
            }
            data = data+"是否同意相机权限: "
            if (granteds["android.permission.CAMERA"] === "granted") {
                data = data + "是\n"
            } else {
                data = data + "否\n"
            }
            data = data+"是否同意存储权限: "
            if (granteds["android.permission.WRITE_EXTERNAL_STORAGE"] === "granted") {
                data = data + "是\n"
            } else {
                data = data + "否\n"
            }
            this.show(data)
        } catch (err) {
            this.show(err.toString())
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    本地权限管理
                </Text>
                <TouchableOpacity style={styles.button}
                    onPress={this.requestCarmeraPermission}
                >
                    <View>
                        <Text>
                            获取相机权限
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={this.requestMultiplePermission}
                >
                    <View>
                        <Text>
                            获取相关权限
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        flexDirection: 'row',
        width: 200,
        height: 60,
        borderWidth: 2,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
});