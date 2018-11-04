import React ,{Component} from 'react';
import {
    View,
    Image,
    Text,
    CameraRoll,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    PermissionsAndroid
} from 'react-native';

export default class PhotosSelection extends Component<props> {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        };
        this.fetchParams = {
            first: 30,
        };
    };

    componentWillMount() {

        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE).then(
            (results) => {
                if (results) {
                    return;
                }
                PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,{
                    'title': '需要您授权',
                    'message': '没有权限我不能更好的为您服务'
                }).then(
                    (res) => {
                        console.log('success')
                    }
                ).catch(
                    (error) => {
                        console.log('error', error);
                    }
                );
            }
        )
        CameraRoll.getPhotos(this.fetchParams).then(
            (results) => {
                const assets = results.edges;
                const images = assets.map((asset) => asset.node.image);
                this.setState({images});
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        );
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>PhotosSelection</Text>
                <TouchableOpacity

                >
                    <View>
                        <Text>
                            获取图片
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.imageGrid}>
                    {
                        this.state.images.map( (image) =>
                            <Image
                                style={styles.image}
                                source={{uri: image.uri}}
                                key={ image.uri }
                            />
                        )
                    }
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafcff",
    },
    imageGrid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        margin: 10
    }
});