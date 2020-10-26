import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

const ShowScreen = (props) => { 
    const {id, title, content} = props.navigation.state.params;

    return(
        <View style={style.container}>
            <View style={style.flex}>
                <Text style={style.mainTitle}>{title}</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('EditScreen', { id: id, title: title, content: content })}>
                    <Entypo name="pencil" size={30} color="black" />
                </TouchableOpacity>
            </View>
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
    flex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
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