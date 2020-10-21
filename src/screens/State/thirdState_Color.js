import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Color = (props) => {
    return(
        <View>
            <Text style={{ fontSize: 30, textAlign: 'center', color: props.color }}>{props.title}</Text> 
            <View style={style.fixToText}>
                <Button title={`${props.lessTitle}`} onPress={() => props.less()} />
                <Button title={`${props.moreTitle}`} onPress={() => props.more()} />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});

export default Color;