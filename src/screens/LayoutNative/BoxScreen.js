import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return(
        <View style={style.viewStyle}>
            <View style={style.View1}></View>
            <View style={style.View2}></View>
            <View style={style.View3}></View>
        </View>
    );
}

const style = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        height: 200,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        position: "relative"
    },
    View1: {
        height: 100,
        width: 100,
        backgroundColor: 'red'
    },
    View2: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    View3: {
        height: 100,
        width: 100,
        backgroundColor: 'blue'
    }
});

export default BoxScreen;