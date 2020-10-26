import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ShowScreen = (props) => {
    const {id, title, content} = props.navigation.state.params;

    return(
        <View style={style.container}>
            <Text style={style.mainTitle}>{title}</Text>
            <Text style={style.content}>Content : {content}</Text>
            <Text style={style.id}>ID : {id}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    mainTitle: {
        fontSize: 40,
        textDecorationLine: 'underline'
    },
    container: {
        borderWidth: 2,
        borderColor: 'black',
        padding: 20
    },
    content: {
        fontSize: 23,
        marginTop: 15
    },
    id: {
        fontSize: 20,
        marginTop: 10
    }
});

export default ShowScreen;