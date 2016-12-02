import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
    Image
} from 'react-native';

var HomeDetail = React.createClass({
    render() {
        return (
            <View style={styles.container}>

                {/*导航*/}
                {this.renderNavBar()}

                <TouchableOpacity onPress={()=>{this.popTopHome()}}>
                    <Text style={styles.welcome}>
                        测试跳转
                    </Text>
                </TouchableOpacity>
            </View>
        );
    },

    popTopHome(){
        this.props.navigator.pop();
    },


    // 导航条
    renderNavBar(){
        return(
            <View style={styles.navOutViewStyle}>
                <TouchableOpacity onPress={()=>{this.props.navigator.pop()}} style={styles.leftViewStyle}>
                    <Image source={{uri: 'icon_camera_back_normal'}} style={styles.navImageStyle}/>
                </TouchableOpacity>
                <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>商品详情</Text>
            </View>
        )
    }
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'red',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    navImageStyle:{
        width:Platform.OS == 'ios' ? 28: 24,
        height:Platform.OS == 'ios' ? 28: 24,
    },

    leftViewStyle:{
        // 绝对定位
        position:'absolute',
        left:10,
        bottom:Platform.OS == 'ios' ? 15:13
    },

    navOutViewStyle:{
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',

        // 设置主轴的方向
        flexDirection:'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems:'center',
        // 主轴方向居中
        justifyContent:'center'
    },
});

// 输出组件类
module.exports = HomeDetail;