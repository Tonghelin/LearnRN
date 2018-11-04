import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    PermissionsAndroid,
    ToastAndroid,
    CameraRoll,
    Image
} from 'react-native';

export default class Loacl extends Component<props>{
    constructor(props) {
        super(props);
        this.fetchParams = {
            first: 50,
        };
        this.state = {
            imgUrl: ""
        };
        this.getPermission = this.getPermission.bind(this);
        this.logError = this.logError.bind(this);
        this.toastError = this.toastError.bind(this);
        this.getPhotosResults = this.getPhotosResults.bind(this);
    }

    componentWillMount() {
        //  组件渲染前询问相机权限
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
        // 先请求权限
        this.getPermission();
    }

    camera() {
        console.log('获取相机权限');
    }
    show(data) {
        ToastAndroid.show(data,ToastAndroid.SHORT);
    }
    logError(error) {
        console.log('Error:', error);
    };
    toastError(error) {
        ToastAndroid.show(error.toString(),ToastAndroid.SHORT)
    }

    // 获取相册权限
    getPermission() {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,{
            'title': '应用权限申请',
            'message': '需要您授权存储权限才能继续使用'
        }).then(
            (result) => {
                // 还需判断三种状态

                ToastAndroid.show(result,ToastAndroid.SHORT);
            }
        ).catch(
            (error) => {
                alert('权限获取失败了'+error);
            }
        )
    }

    getPhotos() {
        CameraRoll.getPhotos(this.fetchParams).then(
            (result) => {
                ToastAndroid.show('图片获取成功了',ToastAndroid.SHORT);
                this.getPhotosResults(result);
            }
        ).catch(
            (error) => {
                ToastAndroid.show(error.toString(),ToastAndroid.SHORT)
            }
        );
    }

    getPhotosResults(data) {
        // alert(JSON.stringify(data));
        const assets = data.edges;  // 获得的图片文件数据都保存再data.edges 中
        let len = assets.length;
        let asset;
        for (let i in assets) {
            asset = assets[i].node; // 得到最后一张图片
        }
        this.setState({
            imgUrl: asset.image.uri
        });
        // alert(JSON.stringify(asset));
        if (!data.page_info.has_next_page) { // 图片已经全部获取完毕
            console.log('所有图片获取完毕！！');
            return;
        }
        // this.fetchParms = {first:50, after: data.page_info.end_cursor};
        // console.log('继续获取下一组照片');
        // CameraRoll.getPhotos(this.fetchParams).then(
        //     (data) => {
        //         this.getPhotosResults(data);
        //     }
        // ).catch(
        //     (error) => {
        //         this.logError(error);
        //     }
        // )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    本地权限管理
                </Text>
                <TouchableOpacity style={styles.button}
                                  onPress={this.getPhotos.bind(this)}
                >
                    <View>
                        <Text>
                            获取图片
                        </Text>
                    </View>
                </TouchableOpacity>
                <View>
                    {
                        this.state.imgUrl?<Image
                            source={{
                                uri: this.state.imgUrl
                            }}
                            style={{width: 200,height:200,borderWidth:2}}
                        /> : <Text>
                            暂无图片
                        </Text>
                    }

                </View>
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